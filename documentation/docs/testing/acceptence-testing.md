---
sidebar_position: 3
---
# Acceptance test

### Project: Storybuilder
#### Q/A Technical Support: 
#### Q/A Round: 1 | Failures: 0
###3 Platform: Web / Mobile

| **Test ID** | **Action/Steps** | **Notes/Expected Result** | **Pass/Fail** | **Notes if Failed** |
|------------|----------------|--------------------------|-------------|----------------|
| **1** | **User Account Creation & Login**  | User creates an account with email and password. Password is validated via the database. Upon success, user is logged in. | ✅ | - |
| **2** | **Invalid Account Creation** | User attempts to create an account with an invalid password (too short, missing special characters). System returns an error message. | ✅ | - |
| **3** | **Login with Incorrect Credentials** | User enters wrong credentials. System denies access and provides an error message. | ✅ | - |
| **4** | **Database Connection Failure During Login** | Database is temporarily unavailable. System displays "Login Failed: Server Error." | ✅ | - |
| **5** | **User Creates an Agent** | User selects the option to create an agent. The system registers the agent and confirms creation. | ✅ | - |
| **6** | **Agent Creation with Missing Data** | User attempts to create an agent but does not provide a name or persona. System displays an error message prompting for required fields. | ✅ | - |
| **7** | **Agent Creation Without Login** | User is not logged in but tries to create an agent. System denies the request and prompts user to log in. | ✅ | - |
| **8** | **User Selects a Persona for an Agent** | User assigns a persona to an agent. System successfully registers the persona selection. | ✅ | - |
| **9** | **Persona Selection Before Creating an Agent** | User tries to assign a persona before creating an agent. System prevents this action and prompts the user to create an agent first. | ✅ | - |
| **10** | **Persona Selection System Error** | A system error occurs while assigning a persona. System displays an appropriate error message and allows the user to retry. | ✅ | - |
| **11** | **API Successfully Fetches and Displays Response** | User clicks "Generate Response" button. System retrieves and displays generated response. Button reverts to original state. | ✅ | - |
| **12** | **API Failure Handling** | API request fails due to network issues. System displays "Error: Unable to fetch response." | ✅ | - |
| **13** | **Prevention of Multiple API Calls** | User rapidly clicks "Generate Response" multiple times. System ensures only one request is sent at a time. | ✅ | - |



