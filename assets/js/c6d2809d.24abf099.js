"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3153],{23938:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=s(74848),i=s(28453);const r={title:"Class Diagrams",sidebar_position:1},a=void 0,o={id:"system-architecture/class-diagram",title:"Class Diagrams",description:"Components",source:"@site/docs/system-architecture/class-diagram.md",sourceDirName:"system-architecture",slug:"/system-architecture/class-diagram",permalink:"/project-003-story-builder-team-2/docs/system-architecture/class-diagram",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2025-Spring/project-003-story-builder-team-2/edit/main/documentation/docs/system-architecture/class-diagram.md",tags:[],version:"current",lastUpdatedBy:"chiku okechukwu",sidebarPosition:1,frontMatter:{title:"Class Diagrams",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"System Architecture",permalink:"/project-003-story-builder-team-2/docs/category/system-architecture"},next:{title:"Sequence Diagrams",permalink:"/project-003-story-builder-team-2/docs/system-architecture/sequence-diagram"}},d={},l=[{value:"Components",id:"components",level:3},{value:"Client/Frontend",id:"clientfrontend",level:4},{value:"Data Fields:",id:"data-fields",level:2},{value:"Methods:",id:"methods",level:2},{value:"Data Fields:",id:"data-fields-1",level:2},{value:"Methods:",id:"methods-1",level:2},{value:"Data Fields:",id:"data-fields-2",level:2},{value:"Methods:",id:"methods-2",level:2},{value:"Data Fields:",id:"data-fields-3",level:2},{value:"Methods:",id:"methods-3",level:2},{value:"Data Fields:",id:"data-fields-4",level:2},{value:"Methods:",id:"methods-4",level:2},{value:"Data Fields:",id:"data-fields-5",level:2},{value:"Methods:",id:"methods-5",level:2},{value:"Data Fields:",id:"data-fields-6",level:2},{value:"Methods:",id:"methods-6",level:2},{value:"Data Fields:",id:"data-fields-7",level:2},{value:"Methods:",id:"methods-7",level:2},{value:"Data Fields:",id:"data-fields-8",level:2},{value:"Methods:",id:"methods-8",level:2},{value:"Data Fields:",id:"data-fields-9",level:2},{value:"Methods:",id:"methods-9",level:2},{value:"Backend",id:"backend",level:4},{value:"Data Fields:",id:"data-fields-10",level:2},{value:"Methods:",id:"methods-10",level:2},{value:"Data Fields:",id:"data-fields-11",level:2},{value:"Methods:",id:"methods-11",level:2},{value:"Data Fields:",id:"data-fields-12",level:2},{value:"Methods:",id:"methods-12",level:2},{value:"Data Fields",id:"data-fields-13",level:2},{value:"Methods",id:"methods-13",level:2},{value:"Data Fields",id:"data-fields-14",level:2},{value:"Methods",id:"methods-14",level:2},{value:"Database",id:"database",level:4},{value:"LLM",id:"llm",level:4}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"components",children:"Components"}),"\n",(0,t.jsx)(n.p,{children:"Provided below are descriptions of the different components and their interfaces."}),"\n",(0,t.jsx)(n.h4,{id:"clientfrontend",children:"Client/Frontend"}),"\n",(0,t.jsx)(n.p,{children:"This is a React-based web application that will require the use of a login page, a homeboard page, and a couple other accompanying pages (determined by the features added). The client will be connected to the server via a WebSocket connection that will allow for communication between the two components."}),"\n",(0,t.jsx)(n.mermaid,{value:"---\ntitle: Frontend Class Diagram \n---\n\nclassDiagram\n    App --\x3e LoginPageDisplay\n    App --\x3e SessionPageDisplay\n    SessionPageDisplay --\x3e AgentDisplay\n    SessionPageDisplay --\x3e AgentSelectionDisplay\n    SessionPageDisplay --\x3e PromptInputDisplay\n    AgentDisplay --\x3e AgentSelectionDisplay\n    SessionPageDisplay --\x3e ChapterDisplay\n    SessionPageDisplay --\x3e StoryDisplay\n    ChapterDisplay --\x3e VotingDisplay\n    ChapterDisplay --\x3e ChapterEditingView \n\n    class App{\n        + User user \n\n        +displaySession() \n        +setUser()\n    }\n\n    class LoginPageDisplay{\n        String username\n        String password\n\n        + validate()\n    }\n\n    class SessionPageDisplay{\n      + String Story\n      + Array AgentDisplay[] \n      + String Prompt\n\n      + setPrompt()\n      + startSession() \n\n      \n    }\n\n    class PromptInputDisplay{\n        +String Prompt\n\n        +setPrompt()\n    }\n\n    class AgentDisplay{\n        + String agentname\n        + String persona\n    }\n\n    class AgentSelectionDisplay{\n        + String agentname \n        + String persona\n\n        + setName() \n        + setPersona() \n        + createAgentDisplay() \n    }\n\n    class ChapterDisplay{\n        +String Agent \n        +String Chapter \n\n        +displayChapter()\n    }\n\n    class ChapterEditingView{\n        +String Chapter \n\n        +editChapter() \n        +vetoChapter() \n    }\n\n    class VotingDisplay{\n        + Int Votes\n    }\n\n    class StoryDisplay{\n        + String Story \n\n        +displayStory()\n    }"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Figure 1.1"})," The above diagram depicts the Frontend class diagram for the project. Each class contains attributes and methods. The main class is the App class. All other class relate to the App class."]}),"\n",(0,t.jsx)(n.h1,{id:"app-class",children:"App Class"}),"\n",(0,t.jsx)(n.h2,{id:"data-fields",children:"Data Fields:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"'User user' : Written guidelines for writing the story"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"displaySession()"}),"\nPurpose: display the the session to the user\nPre-conditions: There must be a user\nPost-conditions: The session is displayed to the user\nParameters: Session\nReturn value: Boolean"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"setUser()"}),"\nPurpose: Set the user\nPre-conditions: A user must be logged in\nPost-conditions: The user is set\nParameters: User User\nReturn value: Boolean"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"loginpagedisplay-class",children:"LoginPageDisplay Class"}),"\n",(0,t.jsx)(n.h2,{id:"data-fields-1",children:"Data Fields:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"'String username' : Username field displayed to user"}),"\n",(0,t.jsx)(n.li,{children:"'String password' : Password field displayed to user"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"methods-1",children:"Methods:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"validate()"}),"\nPurpose: Validate the username and passowrd\nPre-conditions: None\nPost-conditions: The username and password are found to be either valid or invalid\nParameters: String Username, String Password\nReturn value: Boolean"]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"sessionpagedisplay-class",children:"SessionPageDisplay Class"}),"\n",(0,t.jsx)(n.h2,{id:"data-fields-2",children:"Data Fields:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"'String Story' : Username field displayed to user"}),"\n",(0,t.jsx)(n.li,{children:"'Array AgentDisplay[]' : Password field displayed to user"}),"\n",(0,t.jsx)(n.li,{children:"'String Prompt' : Username field displayed to user"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"methods-2",children:"Methods:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"setPrompt()"}),"\nPurpose: Set the prompt\nPre-conditions: A prompt was provided by the user\nPost-conditions: The prompt was set\nParameters: String prompt\nReturn value: Boolean"]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"promptinputdisplay-class",children:"PromptInputDisplay Class"}),"\n",(0,t.jsx)(n.h2,{id:"data-fields-3",children:"Data Fields:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"'String Prompt' : Prompt provided by the user"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"methods-3",children:"Methods:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"setPrompt()"}),"\nPurpose: Set the prompt\nPre-conditions: A prompt was provided by the user\nPost-conditions: The prompt was set\nParameters: String prompt\nReturn value: Boolean"]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"agentdisplay-class",children:"AgentDisplay Class"}),"\n",(0,t.jsx)(n.h2,{id:"data-fields-4",children:"Data Fields:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"'String Agentname' : Name of the agent"}),"\n",(0,t.jsx)(n.li,{children:"'String Prompt' : Prompt provided by the user"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"methods-4",children:"Methods:"}),"\n",(0,t.jsx)(n.h1,{id:"storydisplay-class",children:"StoryDisplay Class"}),"\n",(0,t.jsx)(n.h2,{id:"data-fields-5",children:"Data Fields:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"'String Story' : Prompt provided by the user"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"methods-5",children:"Methods:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"displayStory()"}),"\nPurpose: Display the story to the user\nPre-conditions: The user is on the story page\nPost-conditions: The story was shown to the user\nParameters: String Story\nReturn value: Boolean"]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"chapterdisplay-class",children:"ChapterDisplay Class"}),"\n",(0,t.jsx)(n.h2,{id:"data-fields-6",children:"Data Fields:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"'String Agent' : An AI agent used to write the story"}),"\n",(0,t.jsx)(n.li,{children:"'String Chapter' : A chapter of the story written by the agents"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"methods-6",children:"Methods:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"displayChapter()"}),"\nPurpose: Display a chapter of the story to the user\nPre-conditions: A story is being displayed to the user\nPost-conditions: The chapter was shown to the user\nParameters: String Chapter\nReturn value: Boolean"]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"agentselectiondisplay-class",children:"AgentSelectionDisplay Class"}),"\n",(0,t.jsx)(n.h2,{id:"data-fields-7",children:"Data Fields:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"'String Agentname' : Name of an agent"}),"\n",(0,t.jsx)(n.li,{children:"'String Persona' : Persona of an agent"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"methods-7",children:"Methods:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"selectAgent()"}),"\nPurpose: Select an agent from the list of agents\nPre-conditions: At least one agent exists\nPost-conditions: An agent was selected for writing\nParameters: String Agentname\nReturn value: Boolean"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"createAgentDisplay()"}),"\nPurpose: Display the agent creation page\nPre-conditions: The user is navigating to the agent creation page\nPost-conditions: The agent creation page is shownn to the user\nParameters: None\nReturn value: Boolean"]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"votingdisplay-class",children:"VotingDisplay Class"}),"\n",(0,t.jsx)(n.h2,{id:"data-fields-8",children:"Data Fields:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"'int Votes' : Number of votes"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"methods-8",children:"Methods:"}),"\n",(0,t.jsx)(n.h1,{id:"chaptereditingview-class",children:"ChapterEditingView Class"}),"\n",(0,t.jsx)(n.h2,{id:"data-fields-9",children:"Data Fields:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"'String Chapter' : A chapter of a story"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"methods-9",children:"Methods:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"editChapter()"}),"\nPurpose: Allow the user to edit a chapter\nPre-conditions: At least one chapter exists\nPost-conditions: The user is able to edit a chapter\nParameters: String Chapter\nReturn value: Boolean"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"vetoChapter()"}),"\nPurpose: Allow the user to veto a chapter\nPre-conditions: At least one chapter exists\nPost-conditions: A chapter was vetoed\nParameters: String Chapter\nReturn value: Boolean"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"backend",children:"Backend"}),"\n",(0,t.jsx)(n.p,{children:"The backend is built using JavaScript, with Node.js and Express. It handles data sent from the other components and processes it."}),"\n",(0,t.jsx)(n.mermaid,{value:'---\ntitle: Backend Class Diagram \n---\n\nclassDiagram\n    User "1" *-- "1..*" Session\n    User --\x3e Login\n    Session o-- Story\n    Session *-- Agent\n    Session *-- VotePhase\n\n    class Session{\n        + Array agents[]\n        + User user \n        + Story story\n        + Phase phase\n        + String guidelines\n\n        + createStory()\n        + addAgentToArray()\n        + removeAgentFromArray()\n        + moveToNextPhase()\n        + reset()\n        + setGuidelines()\n    }\n\n    class Story{\n        + String guidelines \n        + Array chapters[]\n        + Boolean isComplete\n        + Int length\n\n        + addChapter(String chapter)\n        + getStory() : String story\n        + completeStory()\n    \n    }\n\n    class Agent{\n      + String persona\n      + String chapter \n      + String aiInstance \n\n      + generateChapter()\n      + analyseAndVote()\n      + sendVote()\n      + setPersona()\n      + adaptToNewChapter()\n    }\n\n    class User{\n        +String username \n        +String password \n\n        + editChapter() \n        + vetoChapter() \n        + moveToNextPhase() \n        + assignGuidlines(String guidelines)\n\n    }\n\n    class VotePhase{\n        + Array agents[]\n        + Array chapters[]\n        + Array votes[] \n\n        + rest()\n        + countVotes(): Array\n\n    }\n\n    class Login{\n        +String username \n        +String password \n\n        +validate(String username, String password): boolean\n    }'}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Figure 1.2"})," The above diagram depicts the Backend class diagram for the project. Each class contains attributes and methods. The main class is the User class. All other class relate to the User class."]}),"\n",(0,t.jsx)(n.h1,{id:"session-class",children:"Session Class"}),"\n",(0,t.jsx)(n.h2,{id:"data-fields-10",children:"Data Fields:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"'Array Agents' : Stores each of the agents that we will be utilizing to vote on the current version of the story and each new generation."}),"\n",(0,t.jsx)(n.li,{children:"'User user' : Object representing a User."}),"\n",(0,t.jsx)(n.li,{children:"'Story story' : Object representing a Story."}),"\n",(0,t.jsx)(n.li,{children:"'Phase phase' : Object representing a Phase."}),"\n",(0,t.jsx)(n.li,{children:"'String guildlines' : Contains the outline for the entities within the system to follow the storybuilding process."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"methods-10",children:"Methods:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"createStory()"}),"\nPurpose: To initialize a story for the session.\nPre-conditions: The session has begun and active.\nPost-conditions: A story is added to the session.\nParameters: Story, User\nReturn value: Story"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"addAgentToArray()"}),"\nPurpose: Take an agent object and add it to the Agent array.\nPre-conditions: The story must be initialized.\nPost-conditions: The story is unchanged, but an Agent is added to the session.\nParameters: Agents\nReturn value: Array"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"removeAgentFromArray()"}),"\nPurpose: Take an agent object and remove it from the Agent array.\nPre-conditions: The story must be initialized.\nPost-conditions: The story is unchanged, but an Agent is removed from the session.\nParameters: Agents\nReturn value: Array"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"moveToNextPhase()"}),"\nPurpose: Initiate the next phase for the storybuilding process (generation of a specific content).\nPre-conditions: The story must be initialized, with no current and incomplete generation process.\nPost-conditions: The next phase of the process is now begun.\nParameters: Phase\nReturn value: Phase"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"reset()"}),"\nPurpose: To reset the session and its story and parameters.\nPre-conditions: The session has begun (User is logged in) and the story is initialized or in development.\nPost-conditions: The entire session is reset.\nParameters: Story, User, Phase, Agents\nReturn value: Story, String"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"setGuidelines()"}),"\nPurpose: To outline the User's intended guidelines for their story.\nPre-conditions: The story is initialized, but a chapter has not been generated yet.\nPost-conditions: A guideline for the story is completed.\nParameters: guidelines\nReturn value: String"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"story-class",children:"Story Class"}),"\n",(0,t.jsx)(n.h2,{id:"data-fields-11",children:"Data Fields:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"'String guidelines' : Written guidelines for writing the story"}),"\n",(0,t.jsx)(n.li,{children:"'Array chapters' : Stores each chapter of the story"}),"\n",(0,t.jsx)(n.li,{children:"'Boolean isComplete' : Whether the story is complete or not"}),"\n",(0,t.jsx)(n.li,{children:"'int length' : length of the story in chapters"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"methods-11",children:"Methods:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"addChapter()"}),"\nPurpose: Add a chapter to the story\nPre-conditions: The story must be initialized\nPost-conditions: A chapter is added to the story\nParameters: Chapter\nReturn value: Boolean"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"getStory()"}),"\nPurpose: Get the text of the story\nPre-conditions: The story must be created with at least one chapter\nPost-conditions: The story is unchanged\nParameters: Story\nReturn value: String"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"completeStory()"}),"\nPurpose: complete the story\nPre-conditions: The story is initialized\nPost-conditions: The story is completed\nParameters: Story\nReturn value: Story"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"agent-class",children:"Agent Class"}),"\n",(0,t.jsx)(n.h2,{id:"data-fields-12",children:"Data Fields:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"'String persona' : Stores speficifed infornation about the agents character like an author to imitate"}),"\n",(0,t.jsx)(n.li,{children:"'String chapter' : Stores most recently generated chapter"}),"\n",(0,t.jsx)(n.li,{children:"'String aiInstance' : Stores connection to AI"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"methods-12",children:"Methods:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"generateChapter()"}),"\nPurpose: Generates a chapter by the agent\nPre-conditions: The agent must be generated, a prompt must be avalible to utilize.\nPost-conditions: Creates a chapter based on condtions give.\nParameters: prompt, context\nReturn value: string chapter"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"analyseAndVote()"}),"\nPurpose: Agent will judge other chapters based on our critera and cast a vote based on judgement\nPre-conditions: The agent must be generated, chapters from all agents must be generated\nPost-conditions: Choose Vote\nParameters: None\nReturn value: String AgentVotedFor"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"sendVote()"}),"\nPurpose: Will send the vote to be tallied\nPre-conditions: The agent has run analyzeAndVote() and returned a value\nPost-conditions: Cast a vote\nParameters: String vote\nReturn value: Boolean"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"setPersona()"}),"\nPurpose: Set persona\nPre-conditions: The agent is created the stpry creation has not started\nParameters: String persona\nReturn value: Boolean"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"fetchDeepseekResponse()"}),"\nPurpose: Call Deepseek API, taking in global prompts and personas to write and generate chapter\nPre-conditions: The agent is created, the persona is selected, and an input is put in .\nParameters: String Input, String Agent, String Persona\nReturn value: String"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"setDeepseekResponse()"}),"\nPurpose: set Deepseek API response, allowing it to be displayed on the screen as a String\nPre-conditions: fetchDeepseekResponse is called to ingest it's output.\nParameters: fetchDeepseekResponse()\nReturn value: String"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"votephase-class",children:"VotePhase Class"}),"\n",(0,t.jsx)(n.h2,{id:"data-fields-13",children:"Data Fields"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"'Array Agents' : Stores each of the agents that we will be utilizing to vote on the current version of the story and each new geenration"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"'Array Chapters' : Each of the stories chapters that will be generated will be kept here. ex. Chapter 1, 2...."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"'Array Votes' : Each of the agents votes will be stored to evaluate the total votes casted onto the story"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"methods-13",children:"Methods"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"rest()"}),"\nPurpose: Stops the Agent generation of new material to allow for user reading/revision/etc\nPre-conditions: The agents have started generating material and are added to the story\nParameters: None\nReturn Value: String"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"countVotes()"}),"\nPurpose: Gathers the agent vote on what they believe to be the best generated material for the story\nPre-conditions: Material is present and generated for revision and agents are added onto the story\nParameters: Array - Agents\nReturn Value: Array"]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"login-class",children:"Login Class"}),"\n",(0,t.jsx)(n.h2,{id:"data-fields-14",children:"Data Fields"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"'String username' : Personalized name created by the user"}),"\n",(0,t.jsx)(n.li,{children:"'String password' : Each account has a password which secures the account and is used to login"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"methods-14",children:"Methods"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"validate()"}),"\nPurpose: Validates user's account and ensures that user can login into their personal account\nPre-conditions: User has previously created an account and made a username and password\nParameters: String username and String password\nReturn Value: Boolean"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"database",children:"Database"}),"\n",(0,t.jsx)(n.p,{children:"Firebase is used to store all of the necessary information generated and needed by the system to create the storyboard and drive user interaction. The database will contain information about chapters in the story, user data, and the generated critiques, goals, and votes."}),"\n",(0,t.jsx)(n.h4,{id:"llm",children:"LLM"}),"\n",(0,t.jsx)(n.p,{children:"The OpenAI API is used to generate content. It is connected to the Agents who request data for transmission and generation."})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var t=s(96540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);