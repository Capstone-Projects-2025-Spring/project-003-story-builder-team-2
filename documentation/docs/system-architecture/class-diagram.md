---
title: Class Diagrams
sidebar_position: 1
---

### Components

Provided below are descriptions of the different components and their interfaces.

#### Client/Frontend

This is a React-based web application that will require the use of a login page, a homeboard page, and a couple other accompanying pages (determined by the features added). The client will be connected to the server via a WebSocket connection that will allow for communication between the two components.

```mermaid 
---
title: Frontend Class Diagram 
---

classDiagram
    App --> LoginPageDisplay
    App --> SessionPageDisplay
    SessionPageDisplay --> AgentDisplay
    SessionPageDisplay --> AgentCreationDisplay
    SessionPageDisplay --> PromptInputDisplay
    AgentDisplay --> AgentCreationDisplay
    SessionPageDisplay --> ChapterDisplay
    SessionPageDisplay --> StoryDisplay
    ChapterDisplay --> VotingDisplay
    ChapterDisplay --> ChapterEditingView 

    class App{
        + User user 

        +displaySession() 
        +setUser()
    }

    class LoginPageDisplay{
        String username
        String password

        + validate()
    }

    class SessionPageDisplay{
      + String Story
      + Array AgentDisplay[] 
      + String Prompt

      + setPrompt
      + startSession() 

      
    }

    class PromptInputDisplay{
        +String Prompt

        +setPrompt()
    }

    class AgentDisplay{
        + String agentname
        + String persona
    }

    class AgentCreationDisplay{
        + String agentname 
        + String persona

        + setName() 
        + setPersona() 
        + createAgentDisplay() 
    }

    class ChapterDisplay{
        +String Agent 
        +String Chapter 

        +displayChapter()
    }

    class ChapterEditingView{
        +String Chapter 

        +editChapter() 
        +vetoChapter() 
    }

    class VotingDisplay{
        + Int Votes
    }

    class StoryDisplay{
        + String Story 

        +displayStory()
    }
```

#### Backend

The backend is built using JavaScript, with Node.js and Express. It handles data sent from the other components and processes it. 

```mermaid
---
title: Backend Class Diagram 
---

classDiagram
    User "1" *-- "1..*" Session
    User --> Login
    Session o-- Story
    Session *-- Agent
    Session *-- VotePhase

    class Session{
        + Array agents[]
        + User user 
        + Story story
        + Phase phase
        + String guidelines

        + createStory()
        + addAgentToArray()
        + removeAgentFromArray()
        + moveToNextPhase()
        + reset()
        + setGuidelines()
    }

    class Story{
        + String guidelines 
        + Array chapters[]
        + Boolean isComplete
        + Int length

        + addChapter(String chapter)
        + getStory() : String story
        + completeStory()
    
    }

    class Agent{
      + String persona
      + String chapter 
      + String aiInstance 

      + generateChapter()
      + analyseAndVote()
      + sendVote()
      + setPersona()
      + adaptToNewChapter()
    }

    class User{
        +String username 
        +String password 

        + editChapter() 
        + vetoChapter() 
        + moveToNextPhase() 
        + assignGuidlines(String guidelines)

    }

    class VotePhase{
        + Array agents[]
        + Array chapters[]
        + Array votes[] 

        + rest()
        + countVotes(): Array

    }

    class Login{
        +String username 
        +String password 

        +validate(String username, String password): boolean
    }
```

**Figure 1.1** blah blah blah description

# Story Class 
## Data Fields: 
    - 'String guidelines' : Written guidelines for writing the story
    - 'Array chapters' : Stores each chapter of the story
    - 'Boolean isComplete' : Whether the story is complete or not
    - 'int length' : length of the story in chapters

## Methods: 
    - `addChapter()`
        Purpose: Add a chapter to the story
        Pre-conditions: The story must be initialized
        Post-conditions: A chapter is added to the story
        Parameters: Chapter
        Return value: Boolean

    - `getStory()` 
        Purpose: Get the text of the story
        Pre-conditions: The story must be created with at least one chapter
        Post-conditions: The story is unchanged
        Parameters: Story
        Return value: String

    - `completeStory()`
        Purpose: complete the story
        Pre-conditions: The story is initialized
        Post-conditions: The story is completed
        Parameters: Story
        Return value: Story

# Agent Class 
## Data Fields: 
    - 'String persona' : Stores speficifed infornation about the agents character like an author to imitate
    - 'String chapter' : Stores most recently generated chapter 
    - 'String aiInstance' : Stores connection to AI 

## Methods: 
    - `generateChapter()`
        Purpose: Generates a chapter by the agent 
        Pre-conditions: The agent must be generated, a prompt must be avalible to utilize. 
        Post-conditions: Creates a chapter based on condtions give. 
        Parameters: prompt, context 
        Return value: string chapter

    - `analyseAndVote()` 
        Purpose: Agent will judge other chapters based on our critera and cast a vote based on judgement 
        Pre-conditions: The agent must be generated, chapters from all agents must be generated 
        Post-conditions: Choose Vote
        Parameters: None
        Return value: String AgentVotedFor 

    - `sendVote()`
        Purpose: Will send the vote to be tallied 
        Pre-conditions: The agent has run analyzeAndVote() and returned a value 
        Post-conditions: Cast a vote 
        Parameters: String vote
        Return value: Boolean 

    - `setPersona()`
        Purpose: Set persona
        Pre-conditions: The agent is created the stpry creation has not started 
        Parameters: String persona 
        Return value: Boolean 
# VotePhase Class
## Data Fields
    - 'Array Agents' : Stores each of the agents that we will be utilizing to vote on the current version of the story and each new geenration
    - 'Array Chapters' : Each of the stories chapters that will be generated will be kept here. ex. Chapter 1, 2....
    - 'Array Votes' : Each of the agents votes will be stored to evaluate the total votes casted onto the story

        
## Methods

    - `rest()`
        Purpose: Stops the Agent generation of new material to allow for user reading/revision/etc
        Pre-conditions: The agents have started generating material and are added to the story
        Parameters: None
        Return Value: String
    - `countVotes()`
        Purpose: Gathers the agent vote on what they believe to be the best generated material for the story
        Pre-conditions: Material is present and generated for revision and agents are added onto the story
        Parameters: Array - Agents
        Return Value: Array

# Login Class
## Data Fields
- 'String username' : Personalized name created by the user
- 'String password' : Each account has a password which secures the account and is used to login

## Methods 
- `validate()`
  Purpose: Validates user's account and ensures that user can login into their personal account
  Pre-conditions: User has previously created an account and made a username and password
  Parameters: String username and String password
  Return Value: Boolean
        

#### Database

Firebase is used to store all of the necessary information generated and needed by the system to create the storyboard and drive user interaction. The database will contain information about chapters in the story, user data, and the generated critiques, goals, and votes.

#### LLM

The OpenAI API is used to generate content. It is connected to the Agents who request data for transmission and generation.