"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[1921],{34184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(74848),i=n(28453);const r={title:"State-Flow Diagram",sidebar_position:3},s=void 0,o={id:"system-architecture/state-flow-diagram",title:"State-Flow Diagram",description:"View the State-Flow Diagram",source:"@site/docs/system-architecture/state-flow-diagram.md",sourceDirName:"system-architecture",slug:"/system-architecture/state-flow-diagram",permalink:"/project-003-story-builder-team-2/docs/system-architecture/state-flow-diagram",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2025-Spring/project-003-story-builder-team-2/edit/main/documentation/docs/system-architecture/state-flow-diagram.md",tags:[],version:"current",lastUpdatedBy:"Elisa Holland",sidebarPosition:3,frontMatter:{title:"State-Flow Diagram",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Sequence Diagrams",permalink:"/project-003-story-builder-team-2/docs/system-architecture/sequence-diagram"},next:{title:"Entity Relation Diagram",permalink:"/project-003-story-builder-team-2/docs/system-architecture/entity-relation-diagram"}},c={},d=[];function l(e){const t={img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"View the State-Flow Diagram",src:n(7040).A+"",width:"949",height:"1053"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Figure 1.13 (shown above)"})," depicts the State Flow Diagram for StoryBuilder. It is composed of 4 main parts: Web App/Frontend, Agents/LLM, Backend, and Database. The flow begins with user interaction with the Frontend, where the first phase is activated: Agent Outline Generation. In this phase there is communication between the Agents, the LLM & the Backend to generate content and reflect on that content. In Generation there are 3 main stages: Voting, Tally & Selection, and Editing. In Reflection there are two added stages: Agent Critique Generation & Agent Goal Generation (these two stages execute and then the system runs through the three Generation stages once more). After the Outline Generation the second phase, Agent Chapter Generation, runs until enough chapters have been generated. The Chapter Generation phase also runs through a similar process as the Outline Generation phase with the Generation and Reflection stages. After every Agent Chapter Generation phase is complete (after every added chapter), the Backend is activated to execute the Story Compilation System to compile chapters into a story. During the flow, the Database is connected to various systems and is utilized to store and retrieve data."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Web App: contains the User Interface, Authentication System, & Agent Management.","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"a User can interact with the various components on the page to Login/Sign up, select Agent profiles by either creating a new agent or using a pre-existing agent pool."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.li,{children:"Backend: contains the Story Compilation System, Voting System, Vote Tally & Selection component, and Editing System."}),"\n",(0,a.jsxs)(t.li,{children:["Agents/LLM: contains the Agent Outline, Agent Chapter, Agent Critique, and Agent Goal Generation.","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"within this, the Agents will be prompted by the Backend to generate content."}),"\n",(0,a.jsx)(t.li,{children:"the agents will request/GET data from the LLM API to generate the content and complete the task they have been given."}),"\n",(0,a.jsx)(t.li,{children:"the generated content is stored in the database and sent to the backend for future use."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.li,{children:"Database: is composed of multiple tables to store the data generated and require by the agents and User"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},7040:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/StateDiagram-c21a7cf43db11e5c19af5dae9b5b6444.jpg"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var a=n(96540);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);