class Phase {
    constructor(number) {
      this.number = number;
      this.title;
      this.winner;
      this.outlineSnippet;
      this.text;
    }

    setTitle(title){
        this.title=title;
    }

    setOutlineSnippet(snippet){
        this.outlineSnippet= snippet;
    }

    setWinner(winner){
        this.winner = winner;
    }
  
    toJSON() {
      return {
        number: this.number,
        title: this.title,
        winner: this.winner,
        outlineSnippet: this.outlineSnippet,
        text: this.text,
      };
    }
  
    static fromJSON(json) {
      return new Phase(json);
    }
  }
  
  export default Phase;