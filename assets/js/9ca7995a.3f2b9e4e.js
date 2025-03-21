"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[2987],{56674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var s=n(74848),r=n(28453);const a={sidebar_position:2},i="Integration tests",o={id:"testing/integration-testing",title:"Integration tests",description:"Test Scenarios:",source:"@site/docs/testing/integration-testing.md",sourceDirName:"testing",slug:"/testing/integration-testing",permalink:"/project-003-story-builder-team-2/docs/testing/integration-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2025-Spring/project-003-story-builder-team-2/edit/main/documentation/docs/testing/integration-testing.md",tags:[],version:"current",lastUpdatedBy:"sharrontum",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Unit tests",permalink:"/project-003-story-builder-team-2/docs/testing/unit-testing"},next:{title:"Acceptance test",permalink:"/project-003-story-builder-team-2/docs/testing/acceptence-testing"}},c={},h=[];function d(e){const t={h1:"h1",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"integration-tests",children:"Integration tests"}),"\n",(0,s.jsx)(t.p,{children:"Test Scenarios:\nSuccessful Account Creation and Login"}),"\n",(0,s.jsx)(t.p,{children:"Given that a user enters valid credentials,\nWhen they attempt to create an account,\nThen the system should validate the password against the database,\nAnd log the user into Storybuilder upon successful validation.\nAccount Creation with Invalid Credentials"}),"\n",(0,s.jsx)(t.p,{children:"Given that a user provides an invalid password (e.g., incorrect format or too short),\nWhen they try to create an account,\nThen the system should return an error message and prevent account creation.\nDatabase Connectivity Issue During Login"}),"\n",(0,s.jsx)(t.p,{children:"Given that the database is temporarily unavailable,\nWhen a user attempts to log in,\nThen the system should display a message indicating a login failure due to a server error."}),"\n",(0,s.jsx)(t.p,{children:"Test Scenarios:\nSuccessful Agent Creation"}),"\n",(0,s.jsx)(t.p,{children:"Given that a user is logged into Storybuilder,\nWhen they attempt to create an agent,\nThen the system should successfully register the agent and return confirmation.\nAgent Creation with Invalid Data"}),"\n",(0,s.jsx)(t.p,{children:"Given that a user tries to create an agent with missing or invalid details,\nWhen they submit the request,\nThen the system should return an error message prompting the user to provide valid data.\nAgent Addition Without User Login"}),"\n",(0,s.jsx)(t.p,{children:"Given that a user is not logged into Storybuilder,\nWhen they attempt to create an agent,\nThen the system should reject the request and prompt them to log in first."}),"\n",(0,s.jsx)(t.p,{children:"Successful Agent Persona Selection"}),"\n",(0,s.jsx)(t.p,{children:"Given that a user has created an agent,\nWhen they select a persona for the agent,\nThen the system should assign the persona and confirm the selection.\nPersona Selection Without Agent Creation"}),"\n",(0,s.jsx)(t.p,{children:"Given that a user has not yet created an agent,\nWhen they attempt to select a persona,\nThen the system should prevent the action and prompt the user to create an agent first.\nAgent Persona Selection Fails Due to System Error"}),"\n",(0,s.jsx)(t.p,{children:"Given that the system encounters an issue while assigning a persona,\nWhen a user attempts to select a persona,\nThen the system should return an appropriate error message and allow the user to retry."})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(96540);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);