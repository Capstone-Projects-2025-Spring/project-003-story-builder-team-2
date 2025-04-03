import axios from 'axios';
import OpenAI from 'openai';

class Agent {
    constructor(persona, aiInstance) {
        this.persona = persona;
        //chapter history is specific to this agent
        this.chapterHistory = [];
        //voted chapters is the voted chapters for the story
        this.votedChapters = [];
        this.chapter = "";
        this.aiInstance = aiInstance;
        this.outline = "";
        this.chapterCount = 0;
    }

    /**
     * Generates a story chapter based on the given prompt and context.
     * @param {string} prompt - The initial story prompt.
     * @param {string} context - Additional context for continuity.
     * @returns {Promise<string>} - The generated chapter.
     */
    async generateChapter(prompt) {
        if(this.aiInstance == "openai"){
            // Create outline if not already created
            if (this.chapterCount == 0) {
                await this.createOutline(prompt);
            }
            this.chapterCount++;
            try {
                // Write a chapter using API
                console.log("Write chapter number " + this.chapterCount + " ,no longer than 100 words, of a story based on the following story outline: " + JSON.stringify(this.outline));
                const response = await axios.post('http://localhost:5001/api/openai', {
                    userPrompt: "Write chapter number" + this.chapterCount + " ,no longer than 100 words, of a story based on the following story outline: " + this.outline,
                    persona: this.persona, // Using the persona from the Agent instance
                });
                this.chapter = response.data.message;
                this.chapterHistory.push(response.data.message);
        
                // Return the completion response from OpenAI
                return this.chapter; // Assuming the backend sends 'message' in the response
        
            } catch (error) {
                console.error('Error fetching completion:', error);
                throw new Error('Failed to generate completion');
            }
        }else{
            // Create outline if not already created
            if (this.chapterCount == 0) {
                await this.createOutline(prompt);
            }
            this.chapterCount++;
            try {
                    // Write a chapter using API
                console.log("Write chapter number " + this.chapterCount + " ,no longer than 100 words, of a story based on the following story outline: " + JSON.stringify(this.outline));
                const res = await axios.post("http://localhost:5001/api/chat", {
                    prompt: "Write chapter number" + this.chapterCount + " ,no longer than 100 words, of a story based on the following story outline: " + this.outline,
                    persona: this.persona, // Using the persona from the Agent instance
                });
                this.chapter = res.data.choices[0].message.content;
                this.chapterHistory.push(res.data.choices[0].message.content);
                this.adaptToVotedChapter(this.chapter);
                return this.chapter // Assuming the backend sends 'message' in the response
                
                
        
            } catch (error) {
                console.error('Error fetching completion:', error);
                throw new Error('Failed to generate completion');
            }

        }
    }

        // Get the current item
    getChapterAtIndex(index) {
        return this.chapterHistory[index];
    }


    async testAccuracy() {
        if (!this.chapter) {
            console.error("No chapter generated yet.");
            return "No chapter available to analyze.";
        }
        if(this.aiInstance == "openai"){
            try {
                // Send a POST request to the backend API
                const response = await axios.post('http://localhost:5001/api/openai', {
                    userPrompt: `Analyze the following text and determine if the writing style is accurate to the selected persona:\n\n"${this.chapter}"\n\nProvide a percentage score and a brief explanation in uder 50 words.`
                });
                console.log("Accuracy Check Response: ", response.data.message);
                return response.data.message;

            } catch (error) {
                console.log('Error fetching accuracy:', error);
                throw new Error('Failed to generate accuracy');
            }
        }else{
            try {
                    const res = await axios.post("http://localhost:5001/api/chat", {
                        prompt: `Analyze the following text and determine if the writing style is accurate to the selected persona:\n\n"${this.chapter}"\n\nProvide a percentage score and a brief explanation in under 50 words.`
            });

            console.log("Accuracy Check Response:", res.data.message);
            return res.data.message;

        } catch (error) {
            console.log('Error checking accuracy:', error);
            throw new Error('Failed to check accuracy');
        }
    }
}
    

    /**
     * Analyzes generated chapters and votes for the best one.
     * @param {Array<string>} chapters - List of chapters generated by all agents.
     * @returns {string} - The chapter the agent votes for.
     */
    analyseAndVote(chapters) {
        if (!chapters.length) return "";
        
        
        const votedChapter = chapters.reduce((best, current) => current.length > best.length ? current : best, chapters[0]);
        return votedChapter;
    }

    /**
     * Sends the selected vote for tallying.
     * @param {string} vote - The selected chapter.
     * @returns {boolean} - Returns true if vote was successfully sent.
     */
    sendVote(vote) {
        if (!vote) return false;
        console.log(`Agent (${this.persona}) voted for:`, vote.substring(0, 50) + '...');
        return true;
    }

    /**
     * Sets the agent's persona.
     * @param {string} persona - The new persona description.
     * @returns {boolean} - Returns true if successfully set.
     */
    setPersona(persona) {
        if (!persona) return false;
        this.persona = persona;
        return true;
    }

    /**
     * 
     * @param {string} adaptToVotedChapter
     */
    adaptToVotedChapter(votedChapter) {
        console.log(`Agent (${this.persona}) adapting to feedback: ${chapter}`);
        
    }

    /**
     * 
     * @param {string} storeVotedChapter
     */
    storeVotedChapter(votedChapter) {
        this.chapterHistory.push(votedChapter);
        
    }

    /**
     * 
     * @param {string} prompt 
     */
    async createOutline(prompt) {
        try {
            // Create outline
            const response = await axios.post('http://localhost:5001/api/openai', {
                userPrompt: "Create an outline, no longer than, 100 words, for a story about " + prompt + " The story will be 4 chapters in total and each chapter will be 50 words. Make sure to include what happens in each chapter and what characters appear.",
            });
            this.outline = response.data.message;
            console.log(this.outline);
            return this.outline;
    
        } catch (error) {
            console.error('Error fetching completion:', error);
            throw new Error('Failed to generate completion');
        }
    }
}

export default Agent;
