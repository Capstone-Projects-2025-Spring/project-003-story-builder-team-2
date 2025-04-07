"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[7837],{85374:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=t(74848),i=t(28453);const s={title:"Version Control",sidebar_position:6},o="Version Control",a={id:"system-architecture/version-control",title:"Version Control",description:"We will use Git for version control in Story Builder to manage and track changes effectively across multiple components.",source:"@site/docs/system-architecture/version-control.md",sourceDirName:"system-architecture",slug:"/system-architecture/version-control",permalink:"/project-003-story-builder-team-2/docs/system-architecture/version-control",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2025-Spring/project-003-story-builder-team-2/edit/main/documentation/docs/system-architecture/version-control.md",tags:[],version:"current",lastUpdatedBy:"tur97019",sidebarPosition:6,frontMatter:{title:"Version Control",sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Development Environment",permalink:"/project-003-story-builder-team-2/docs/system-architecture/development-environment"},next:{title:"API Specification",permalink:"/project-003-story-builder-team-2/docs/category/api-specification"}},c={},l=[{value:"Branch Strategy",id:"branch-strategy",level:3},{value:"Versioning",id:"versioning",level:3},{value:"Branch Merging",id:"branch-merging",level:3}];function d(e){const n={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"version-control",children:"Version Control"}),"\n",(0,r.jsxs)(n.p,{children:["We will use Git for version control in ",(0,r.jsx)(n.strong,{children:"Story Builder"})," to manage and track changes effectively across multiple components."]}),"\n",(0,r.jsx)(n.h3,{id:"branch-strategy",children:"Branch Strategy"}),"\n",(0,r.jsx)(n.p,{children:"To keep development organized and make bug fixing easier, we will use different Git branches for:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Front-End"})," \u2013 User interface and design changes"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Back-End"})," \u2013 Server-side logic changes"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Database"})," \u2013 Data management alterations"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Testing"})," \u2013 Bug fixes and quality checks"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Documentation"})," \u2013 Docusaurus and README.md changes"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Production"})," \u2013 Final stable version (main branch)"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Each of these major sections will have smaller subsections, where Jira tickets and Git branches will reflect the respective work. It is common for the branches to span multiple major categories. For example, a branch named ",(0,r.jsx)(n.code,{children:"generateChapter"})," might involve ",(0,r.jsx)(n.strong,{children:"frontend"}),", ",(0,r.jsx)(n.strong,{children:"backend"}),", ",(0,r.jsx)(n.strong,{children:"database"}),", and ",(0,r.jsx)(n.strong,{children:"testing"})," work."]}),"\n",(0,r.jsx)(n.p,{children:"This approach allows us to work smoothly and merge changes efficiently while keeping the project stable."}),"\n",(0,r.jsx)(n.h3,{id:"versioning",children:"Versioning"}),"\n",(0,r.jsxs)(n.p,{children:["To manage releases, we follow ",(0,r.jsx)(n.strong,{children:"semantic versioning"}),". The version number is divided into three segments:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Major Version"}),": Introduces significant changes or backward-incompatible updates. For example, a change in the way the backend works that breaks existing functionality would be a major version change."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Minor Version"}),": Adds new features or improvements that maintain backward compatibility. For instance, adding a new page or feature without breaking existing functionality."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Patch Version"}),": Includes bug fixes or minor improvements that don\u2019t change existing functionality. These are typically quick fixes or optimizations."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"This versioning scheme helps us track progress, manage releases, and maintain stability across versions."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Current Version"}),": 0.0.0 (as of 03/18/2025)"]}),"\n",(0,r.jsx)(n.h3,{id:"branch-merging",children:"Branch Merging"}),"\n",(0,r.jsxs)(n.p,{children:["When working with branches, it is important to merge changes back to the ",(0,r.jsx)(n.strong,{children:"Production"})," branch only after careful testing and validation. This ensures that only stable features and fixes make it into the main production codebase."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);