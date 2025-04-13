// Classes/Story.js

class Story {
    constructor(totalChapters) {
      this.title;
      this.outline;
      this.totalChapters = totalChapters;
      this.chapters = []; // Array of generated chapters
    }

    addPhase(title, winner, outline){

    }
    setOutline(outline){
        this.outline = outline;
    }
  
    addChapter(chapterText) {
      this.chapters = [...this.chapters, chapterText];
    }
  
    getCurrentChapter() {
      return this.chapters.length;
    }
  
    getChapter(index) {
      return this.chapters[index] || null;
    }
  
    toJSON() {
      return {
        title: this.title,
        outline: this.outline,
        totalChapters: this.totalChapters,
        chapters: this.chapters,
      };
    }
  
    fromJSON(json) {
      this.title = json.title;
      this.outline = json.outline;
      this.totalChapters = json.totalChapters;
      this.chapters = json.chapters;
    }
  }
  
  export default Story;
  