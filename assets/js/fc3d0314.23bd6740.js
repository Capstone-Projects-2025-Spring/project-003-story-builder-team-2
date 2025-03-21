"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[1559],{24727:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=s(74848),n=s(28453);const i={sidebar_position:3},d="Acceptance test",c={id:"testing/acceptence-testing",title:"Acceptance test",description:"Project: Storybuilder",source:"@site/docs/testing/acceptence-testing.md",sourceDirName:"testing",slug:"/testing/acceptence-testing",permalink:"/project-003-story-builder-team-2/docs/testing/acceptence-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2025-Spring/project-003-story-builder-team-2/edit/main/documentation/docs/testing/acceptence-testing.md",tags:[],version:"current",lastUpdatedBy:"csimmons2024",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Integration tests",permalink:"/project-003-story-builder-team-2/docs/testing/integration-testing"},next:{title:"Testing Procedures",permalink:"/project-003-story-builder-team-2/docs/testing/testing_procedures"}},l={},o=[{value:"Project: Storybuilder",id:"project-storybuilder",level:3},{value:"Q/A Technical Support:",id:"qa-technical-support",level:4},{value:"Q/A Round: 1 | Failures: 0",id:"qa-round-1--failures-0",level:4}];function a(e){const t={h1:"h1",h3:"h3",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"acceptance-test",children:"Acceptance test"}),"\n",(0,r.jsx)(t.h3,{id:"project-storybuilder",children:"Project: Storybuilder"}),"\n",(0,r.jsx)(t.h4,{id:"qa-technical-support",children:"Q/A Technical Support:"}),"\n",(0,r.jsx)(t.h4,{id:"qa-round-1--failures-0",children:"Q/A Round: 1 | Failures: 0"}),"\n",(0,r.jsx)(t.p,{children:"###3 Platform: Web / Mobile"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Test ID"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Action/Steps"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Notes/Expected Result"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Pass/Fail"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Notes if Failed"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"1"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"User Account Creation & Login"})}),(0,r.jsx)(t.td,{children:"User creates an account with email and password. Password is validated via the database. Upon success, user is logged in."}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"2"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Invalid Account Creation"})}),(0,r.jsx)(t.td,{children:"User attempts to create an account with an invalid password (too short, missing special characters). System returns an error message."}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"3"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Login with Incorrect Credentials"})}),(0,r.jsx)(t.td,{children:"User enters wrong credentials. System denies access and provides an error message."}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"4"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Database Connection Failure During Login"})}),(0,r.jsx)(t.td,{children:'Database is temporarily unavailable. System displays "Login Failed: Server Error."'}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"5"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"User Creates an Agent"})}),(0,r.jsx)(t.td,{children:"User selects the option to create an agent. The system registers the agent and confirms creation."}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"6"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Agent Creation with Missing Data"})}),(0,r.jsx)(t.td,{children:"User attempts to create an agent but does not provide a name or persona. System displays an error message prompting for required fields."}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"7"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Agent Creation Without Login"})}),(0,r.jsx)(t.td,{children:"User is not logged in but tries to create an agent. System denies the request and prompts user to log in."}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"8"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"User Selects a Persona for an Agent"})}),(0,r.jsx)(t.td,{children:"User assigns a persona to an agent. System successfully registers the persona selection."}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"9"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Persona Selection Before Creating an Agent"})}),(0,r.jsx)(t.td,{children:"User tries to assign a persona before creating an agent. System prevents this action and prompts the user to create an agent first."}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"10"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Persona Selection System Error"})}),(0,r.jsx)(t.td,{children:"A system error occurs while assigning a persona. System displays an appropriate error message and allows the user to retry."}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"11"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"API Successfully Fetches and Displays Response"})}),(0,r.jsx)(t.td,{children:'User clicks "Generate Response" button. System retrieves and displays generated response. Button reverts to original state.'}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"12"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"API Failure Handling"})}),(0,r.jsx)(t.td,{children:'API request fails due to network issues. System displays "Error: Unable to fetch response."'}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"13"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Prevention of Multiple API Calls"})}),(0,r.jsx)(t.td,{children:'User rapidly clicks "Generate Response" multiple times. System ensures only one request is sent at a time.'}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{children:"-"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>c});var r=s(96540);const n={},i=r.createContext(n);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);