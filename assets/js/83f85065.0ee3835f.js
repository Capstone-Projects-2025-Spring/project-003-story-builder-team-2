"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[1982],{10730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=n(74848),r=n(28453);const i={},a="Testing Procedures",o={id:"testing/testing_procedures",title:"Testing Procedures",description:"Vitest is a testing framework used for both front-end and back-end projects to ensure that components and features function as expected. It is particularly well-suited for Vite/React-based projects.",source:"@site/docs/testing/testing_procedures.md",sourceDirName:"testing",slug:"/testing/testing_procedures",permalink:"/project-003-story-builder-team-2/docs/testing/testing_procedures",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2025-Spring/project-003-story-builder-team-2/edit/main/documentation/docs/testing/testing_procedures.md",tags:[],version:"current",lastUpdatedBy:"chiku okechukwu",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Acceptance test",permalink:"/project-003-story-builder-team-2/docs/testing/acceptence-testing"}},d={},c=[{value:"Test Case",id:"test-case",level:2},{value:"Integration Tests",id:"integration-tests",level:2},{value:"Acceptance Tests",id:"acceptance-tests",level:2},{value:"Project: Storybuilder",id:"project-storybuilder",level:2},{value:"Q/A Technical Support:",id:"qa-technical-support",level:3},{value:"Q/A Round: 1 | Failures: 0",id:"qa-round-1--failures-0",level:3},{value:"Platform: Web / Mobile",id:"platform-web--mobile",level:3}];function l(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"testing-procedures",children:"Testing Procedures"}),"\n",(0,s.jsx)(t.p,{children:"Vitest is a testing framework used for both front-end and back-end projects to ensure that components and features function as expected. It is particularly well-suited for Vite/React-based projects."}),"\n",(0,s.jsx)(t.p,{children:"To use Vitest, it must first be installed via npm or yarn. Once installed, it can be configured in the package.json file to enable testing throughout the project. Vitest supports unit testing, snapshot testing, mocking, and built-in TypeScript compatibility."}),"\n",(0,s.jsx)(t.h2,{id:"test-case",children:"Test Case"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'test("fetches and displays response", async () => {\n    axios.post.mockResolvedValue({\n        data: { choices: [{ text: "This is a test response." }] },\n    });\n\n    render(<AgentScreen />);\n\n    const button = screen.getByText("Generate Response");\n    fireEvent.click(button);\n\n    // Check button text manually (Vitest does not support `toHaveTextContent` natively)\n    expect(button.textContent).toBe("Generating...");\n\n    await waitFor(() => {\n        // Instead of `toBeInTheDocument`, check if the element exists\n        expect(screen.getByText(/Response:/)).not.toBeNull();\n        expect(screen.getByText("This is a test response.")).not.toBeNull();\n    });\n\n    expect(button.textContent).toBe("Generate Response");\n});\n\n'})}),"\n",(0,s.jsx)(t.h2,{id:"integration-tests",children:"Integration Tests"}),"\n",(0,s.jsx)(t.p,{children:"Test Scenarios:\nSuccessful Account Creation and Login"}),"\n",(0,s.jsx)(t.p,{children:"Given that a user enters valid credentials,\nWhen they attempt to create an account,\nThen the system should validate the password against the database,\nAnd log the user into Storybuilder upon successful validation.\nAccount Creation with Invalid Credentials"}),"\n",(0,s.jsx)(t.p,{children:"Given that a user provides an invalid password (e.g., incorrect format or too short),\nWhen they try to create an account,\nThen the system should return an error message and prevent account creation.\nDatabase Connectivity Issue During Login"}),"\n",(0,s.jsx)(t.p,{children:"Given that the database is temporarily unavailable,\nWhen a user attempts to log in,\nThen the system should display a message indicating a login failure due to a server error."}),"\n",(0,s.jsx)(t.p,{children:"Test Scenarios:\nSuccessful Agent Creation"}),"\n",(0,s.jsx)(t.p,{children:"Given that a user is logged into Storybuilder,\nWhen they attempt to create an agent,\nThen the system should successfully register the agent and return confirmation.\nAgent Creation with Invalid Data"}),"\n",(0,s.jsx)(t.p,{children:"Given that a user tries to create an agent with missing or invalid details,\nWhen they submit the request,\nThen the system should return an error message prompting the user to provide valid data.\nAgent Addition Without User Login"}),"\n",(0,s.jsx)(t.p,{children:"Given that a user is not logged into Storybuilder,\nWhen they attempt to create an agent,\nThen the system should reject the request and prompt them to log in first."}),"\n",(0,s.jsx)(t.p,{children:"Successful Agent Persona Selection"}),"\n",(0,s.jsx)(t.p,{children:"Given that a user has created an agent,\nWhen they select a persona for the agent,\nThen the system should assign the persona and confirm the selection.\nPersona Selection Without Agent Creation"}),"\n",(0,s.jsx)(t.p,{children:"Given that a user has not yet created an agent,\nWhen they attempt to select a persona,\nThen the system should prevent the action and prompt the user to create an agent first.\nAgent Persona Selection Fails Due to System Error"}),"\n",(0,s.jsx)(t.p,{children:"Given that the system encounters an issue while assigning a persona,\nWhen a user attempts to select a persona,\nThen the system should return an appropriate error message and allow the user to retry."}),"\n",(0,s.jsx)(t.h2,{id:"acceptance-tests",children:"Acceptance Tests"}),"\n",(0,s.jsx)(t.h1,{id:"test-case-table",children:"Test Case Table"}),"\n",(0,s.jsx)(t.h2,{id:"project-storybuilder",children:"Project: Storybuilder"}),"\n",(0,s.jsx)(t.h3,{id:"qa-technical-support",children:"Q/A Technical Support:"}),"\n",(0,s.jsx)(t.h3,{id:"qa-round-1--failures-0",children:"Q/A Round: 1 | Failures: 0"}),"\n",(0,s.jsx)(t.h3,{id:"platform-web--mobile",children:"Platform: Web / Mobile"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Test ID"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Action/Steps"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Notes/Expected Result"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Pass/Fail"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Notes if Failed"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"1"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"User Account Creation & Login"})}),(0,s.jsx)(t.td,{children:"User creates an account with email and password. Password is validated via the database. Upon success, user is logged in."}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"2"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Invalid Account Creation"})}),(0,s.jsx)(t.td,{children:"User attempts to create an account with an invalid password (too short, missing special characters). System returns an error message."}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"3"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Login with Incorrect Credentials"})}),(0,s.jsx)(t.td,{children:"User enters wrong credentials. System denies access and provides an error message."}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"4"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Database Connection Failure During Login"})}),(0,s.jsx)(t.td,{children:'Database is temporarily unavailable. System displays "Login Failed: Server Error."'}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"5"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"User Creates an Agent"})}),(0,s.jsx)(t.td,{children:"User selects the option to create an agent. The system registers the agent and confirms creation."}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"6"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Agent Creation with Missing Data"})}),(0,s.jsx)(t.td,{children:"User attempts to create an agent but does not provide a name or persona. System displays an error message prompting for required fields."}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"7"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Agent Creation Without Login"})}),(0,s.jsx)(t.td,{children:"User is not logged in but tries to create an agent. System denies the request and prompts user to log in."}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"8"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"User Selects a Persona for an Agent"})}),(0,s.jsx)(t.td,{children:"User assigns a persona to an agent. System successfully registers the persona selection."}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"9"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Persona Selection Before Creating an Agent"})}),(0,s.jsx)(t.td,{children:"User tries to assign a persona before creating an agent. System prevents this action and prompts the user to create an agent first."}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"10"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Persona Selection System Error"})}),(0,s.jsx)(t.td,{children:"A system error occurs while assigning a persona. System displays an appropriate error message and allows the user to retry."}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"11"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"API Successfully Fetches and Displays Response"})}),(0,s.jsx)(t.td,{children:'User clicks "Generate Response" button. System retrieves and displays generated response. Button reverts to original state.'}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"12"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"API Failure Handling"})}),(0,s.jsx)(t.td,{children:'API request fails due to network issues. System displays "Error: Unable to fetch response."'}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"13"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Prevention of Multiple API Calls"})}),(0,s.jsx)(t.td,{children:'User rapidly clicks "Generate Response" multiple times. System ensures only one request is sent at a time.'}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{children:"-"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);