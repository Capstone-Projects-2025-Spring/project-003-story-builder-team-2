"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3374],{22496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(74848),i=n(28453);const s={title:"System Overview",sidebar_position:1},o="System Overview",a={id:"requirements/system-overview",title:"System Overview",description:"Project Abstract",source:"@site/docs/requirements/system-overview.md",sourceDirName:"requirements",slug:"/requirements/system-overview",permalink:"/project-003-story-builder-team-2/docs/requirements/system-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2025-Spring/project-003-story-builder-team-2/edit/main/documentation/docs/requirements/system-overview.md",tags:[],version:"current",lastUpdatedBy:"EthanLongtuq",sidebarPosition:1,frontMatter:{title:"System Overview",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Requirements Specification",permalink:"/project-003-story-builder-team-2/docs/category/requirements-specification"},next:{title:"System Block Diagram",permalink:"/project-003-story-builder-team-2/docs/requirements/system-block-diagram"}},c={},l=[{value:"Project Abstract",id:"project-abstract",level:2},{value:"Conceptual Design",id:"conceptual-design",level:2},{value:"Background",id:"background",level:2}];function d(e){const t={h1:"h1",h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"system-overview",children:"System Overview"}),"\n",(0,r.jsx)(t.h2,{id:"project-abstract",children:"Project Abstract"}),"\n",(0,r.jsx)(t.p,{children:"This document proposes a web application that generates and edits new stories through AI agents. The application will feature a back end that creates several agents (writers) capable of generating unique stories based on user prompts. The generated stories will then be subject to user voting, allowing the best version to be selected and revised before further material is developed. The context will be saved and used to create more complete narratives over time. This approach enables users to rely on AI agents instead of outsourcing to traditional writers, facilitating quicker story creation and providing outlines and templates for writers to build upon. Additionally, the application will collect data on story factors, such as the frequency of character mentions and occurrences of hallucinations."}),"\n",(0,r.jsx)(t.h2,{id:"conceptual-design",children:"Conceptual Design"}),"\n",(0,r.jsx)(t.p,{children:"Story Builder is a web application built using the React.js framework, along with HTML and CSS, for front-end editing and handling user inputs and prompts sent to the backend. The backend will primarily run on the Node.js server environment, which will funnel prompts into our OpenAI or Deepseek API calls that return the generated story to the front end for users to continuously edit and expand. This cycle\u2014prompt, receive, revise\u2014will be repeated until the story is complete, with the context stored either in Node or in a SQL database."}),"\n",(0,r.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,r.jsx)(t.p,{children:"This application is designed to streamline the creative writing process by combining the content generation capabilities of AI with user-driven  refinement, creating a tool that enhances both efficiency and creativity. By allowing users to prompt and guide multiple AI-generated drafts and then vote on the best version, the app establishes a collaborative environment where human insight directly shapes the narrative. This approach not only reduces the time and cost associated with traditional writing methods but also serves as a resource for overcoming writer\u2019s block and sparking new ideas. Additionally, by collecting detailed data on story elements\u2014such as character mentions and narrative consistency\u2014the platform offers actionable insights to further refine and enhance storytelling quality. Built on a modern technological stack with React.js and Node.js."})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(96540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);