import axios from 'axios'; 
import OpenAI from 'openai';
import { personas } from "../data/Personas.js";
import API from '../api/api.js';


class Agent {
    constructor(persona, aiInstance) {
        this.persona = persona; 
        this.chapterHistory = [];
        this.votedChapterHistory = [];
        this.chapter = "";
        this.aiInstance = aiInstance;
        this.outline = "";
        this.chapterCount = 0;
        this.totalChapters = 0;
        this.votingReasoning = [];
        this.profile = personas[this.persona]; // attach profile
        this.agentid = "";
        this.chapters = [];
    }

    async generateOutline(prompt){
        await this.createOutline(prompt);
        this.chapterCount++;
        this.chapterHistory = [...this.chapterHistory, this.outline];
        return this.outline;
    }

    /**
     * Generates a story chapter based on the given prompt and context.
     * @param {string} prompt - The initial story prompt.
     * @param {string} context - Additional context for continuity.
     * @returns {Promise<string>} - The generated chapter.
     */
    async generateChapter(outline, chapter) {
        if(this.aiInstance == "openai"){
            try {
                console.log("Write chapter number " + this.chapterCount + " ,no longer than 100 words, of a story based on the following story outline: " + JSON.stringify(this.outline) + ". With the context of this last chapter: " + JSON.stringify(this.chapter));
                // Write a chapter using API
                const response = await API.post('/api/openai', {
                    userPrompt: "Write chapter number " + this.chapterCount + " ,no longer than 100 words, of a story based on the following story outline: " + JSON.stringify(this.outline) + ". With the context of this last chapter: " + JSON.stringify(this.chapter),
                    persona: this.persona, // Using the persona from the Agent instance
                });
                this.chapter = response.data.message;
                this.chapterHistory = [...this.chapterHistory, this.chapter];
                this.chapterCount++;
        
                // Return the completion response from OpenAI
                return this.chapter; // Assuming the backend sends 'message' in the response
        
            } catch (error) {
                console.error('Error fetching completion:', error);
                throw new Error('Failed to generate completion');
            }
        }else{
            try {
                    // Write a chapter using API
                const res = await API.post('/api/chat', {
                    prompt: "Write chapter number " + this.chapterCount + " ,no longer than 100 words, of a story based on the following story outline: " + JSON.stringify(this.outline) + ". With the context of this last chapter: " + JSON.stringify(this.chapter),
                    persona: this.persona, // Using the persona from the Agent instance
                });
                this.chapter = res.data.choices[0].message.content;
                this.chapterHistory = [...this.chapterHistory, this.chapter];
                this.chapterCount++;
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
                const response = await API.post('/api/openai', {
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
                    const res = await API.post('/api/chat', {
                        prompt: `Analyze the following text and determine if the writing style is accurate to the selected persona:\n\n"${this.chapter}"\n\nProvide a percentage score and a brief explanation in under 50 words.`
            });

            console.log("Accuracy Check Response:", res.data.choices[0].message.content);
            return res.data.choices[0].message.content;

        } catch (error) {
            console.log('Error checking accuracy:', error);
            throw new Error('Failed to check accuracy');
        }
    }
}
    async promptAgentToVote() {
        if (!this.chapterHistory.length) {
            console.warn(`Agent ${this.persona} has no chapters to vote on.`);
            return {};
        }
    
        const votedChapter = this.analyseAndVote(this.chapterHistory);
    
        const votedIndex = this.chapterHistory.findIndex(ch => ch === votedChapter);
        if (votedIndex === -1) {
            console.warn(`Agent ${this.persona} could not match voted chapter.`);
            return {};
        }
    
        this.sendVote(votedChapter);
    
        return {
            votedIndex,
            voteValue: 1
        };
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
     * @param {string} feedback 
     */
    adaptToNewChapter(feedback) {
        console.log(`Agent (${this.persona}) adapting to feedback: ${feedback}`);
        this.chapter += `\n[Agent adapts: ${feedback}]`;
    }

    /**
     * 
     * @param {int} chapterTotal 
     */
    setChapterCount(chapterTotal) {
        this.totalChapters = chapterTotal;
    }

    /**
     * 
     * @param {string} agentID
     */
    setAgentID(agentID) {
        this.agentid = agentID;
    }

    /**
     * 
     * @param {string} winningChapter
     */
    addVotedChapter(winningChapter) {
        this.votedChapterHistory.push(winningChapter);
    }
    
    getVotedChapterHistory() {
        const trimmedArray = [];

        for (let i = 1; i < this.votedChapterHistory.length; i++) {
            trimmedArray.push(this.votedChapterHistory[i]);
        }

         this.votedChapterHistory = trimmedArray.join("\n\n");
        return this.votedChapterHistory;
      };

    /**
     * 
     * @param {Map} chapters
     */
    async vote(chaptersMap) {
        const keysIterator = chaptersMap.keys();
        let chapters = "";
        let i = 1;
        //Prompt agent
        const chapterNumbers = new Map();
        for (const key of keysIterator) {
            chapters = chapters + "Option " + i + " is:\n" + key + "\n";
            chapterNumbers.set(i, key);
            i++;
        }
        const response = await API.post('/api/openai', {
            userPrompt: "Pick your favorite writing sample from the following options. Your response should be a number following by an explanation of your thoughts on each of the options. For example, if you like option 1, your response should be 1 and then your reasoning. These are the options: \n" + chapters,
            persona: this.persona,
        });
        
        //Get analysis from response
        const firstIntegerIndex = response.data.message.search(/\d/);
        const analysis = response.data.message.substring(firstIntegerIndex + 1);
        console.log("analysis is: \n" + analysis);
        this.votingReasoning.push(analysis);
        

        return chapterNumbers.get(parseInt(response.data.message));
    }

    /**
     * 
     * @param {string} prompt 
     */
    async createOutline(prompt, chapterNum) {
        try {
            // Create outline
            const response = await API.post('/api/openai', {
                userPrompt: "Create an outline, no longer than, 100 words, for a story about " + prompt + " The story will be " + this.totalChapters + " chapters in total and each chapter will be 50 words. Make sure to include what happens in each chapter and what characters appear.",
            });
            this.outline = response.data.message;
            this.chapter = this.outline;
            console.log(this.outline);
            return this.outline;
    
        } catch (error) {
            console.error('Error fetching completion:', error);
            throw new Error('Failed to generate completion');
        }
    }
}

export default Agent;
