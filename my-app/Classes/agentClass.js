class Agent {
    constructor(persona, aiInstance) {
        this.persona = persona; 
        this.chapter = "";
        this.aiInstance = aiInstance; 
    }

    /**
     * Generates a story chapter based on the given prompt and context.
     * @param {string} prompt - The initial story prompt.
     * @param {string} context - Additional context for continuity.
     * @returns {Promise<string>} - The generated chapter.
     */
    async generateChapter(prompt, context) {
        try {
            const response = await this.aiInstance.generateText({
                
            });
            this.chapter = response.text;
            return this.chapter;
        } catch (error) {
            console.error("Error generating chapter:", error);
            return "";
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
     * @param {string} feedback 
     */
    adaptToNewChapter(feedback) {
        console.log(`Agent (${this.persona}) adapting to feedback: ${feedback}`);
        this.chapter += `\n[Agent adapts: ${feedback}]`;
    }
}

export default Agent;
