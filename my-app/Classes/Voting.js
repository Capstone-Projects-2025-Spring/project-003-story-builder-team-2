import { getFirestore } from "firebase-admin/firestore";

class Voting {
  constructor(agents, storyId, chapterDocs) {
    this.agents = agents;                 // array of Agent instances
    this.storyId = storyId;               // Firestore Story doc ID
    this.chapterDocs = chapterDocs;       // array of Firestore chapter docs { id, ... }
    this.db = getFirestore();
  }

  async collectVotesAndSubmit() {
    const votes = [];

    // Step 1: Each agent votes for a chapter index
    for (const agent of this.agents) {
      const vote = await agent.promptAgentToVote();
      if (vote && vote.votedIndex !== undefined) {
        const chapter = this.chapterDocs[vote.votedIndex];
        if (chapter) {
          votes.push({
            chapterId: chapter.id,
            voteValue: vote.voteValue || 1,
          });
        }
      }
    }

    // Step 2: Tally and update Firestore vote counts
    const groupedVotes = {};

    for (const vote of votes) {
      if (!groupedVotes[vote.chapterId]) {
        groupedVotes[vote.chapterId] = 0;
      }
      groupedVotes[vote.chapterId] += vote.voteValue;
    }

    for (const [chapterId, count] of Object.entries(groupedVotes)) {
      const chapterRef = this.db
        .collection("Stories")
        .doc(this.storyId)
        .collection("Chapters")
        .doc(chapterId);

      await chapterRef.update({
        Votes: count,
      });

      //for (const agent of this.agents) {
      //  agent.getVotedChapter()
      //}
      console.log(`✅ Updated chapter ${chapterId} with ${count} vote(s)`);
    }

    return groupedVotes;
  }
}

export default Voting;
