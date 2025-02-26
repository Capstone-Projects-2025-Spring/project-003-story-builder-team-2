---
title: State-Flow Diagram
sidebar_position: 3
---

![View the State-Flow Diagram](/img/StateDiagram.jpg)

**Figure 1.13 (shown above)** depicts the State Flow Diagram for StoryBuilder. It is composed of 4 main parts: Web App/Frontend, Agents/LLM, Backend, and Database. The flow begins with user interaction with the Frontend, where the first phase is activated: Agent Outline Generation. In this phase there is communication between the Agents, the LLM & the Backend to generate content and reflect on that content. In Generation there are 3 main stages: Voting, Tally & Selection, and Editing. In Reflection there are two added stages: Agent Critique Generation & Agent Goal Generation (these two stages execute and then the system runs through the three Generation stages once more). After the Outline Generation the second phase, Agent Chapter Generation, runs until enough chapters have been generated. The Chapter Generation phase also runs through a similar process as the Outline Generation phase with the Generation and Reflection stages. After every Agent Chapter Generation phase is complete (after every added chapter), the Backend is activated to execute the Story Compilation System to compile chapters into a story. During the flow, the Database is connected to various systems and is utilized to store and retrieve data.
- Web App: contains the User Interface, Authentication System, & Agent Management.
    - a User can interact with the various components on the page to Login/Sign up, select Agent profiles by either creating a new agent or using a pre-existing agent pool.
- Backend: contains the Story Compilation System, Voting System, Vote Tally & Selection component, and Editing System.
- Agents/LLM: contains the Agent Outline, Agent Chapter, Agent Critique, and Agent Goal Generation.
    - within this, the Agents will be prompted by the Backend to generate content. 
    - the agents will request/GET data from the LLM API to generate the content and complete the task they have been given.
    - the generated content is stored in the database and sent to the backend for future use.
- Database: is composed of multiple tables to store the data generated and require by the agents and User