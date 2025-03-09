---
sidebar_position: 2
---
# Integration tests

Test Scenarios:
Successful Account Creation and Login

Given that a user enters valid credentials,
When they attempt to create an account,
Then the system should validate the password against the database,
And log the user into Storybuilder upon successful validation.
Account Creation with Invalid Credentials

Given that a user provides an invalid password (e.g., incorrect format or too short),
When they try to create an account,
Then the system should return an error message and prevent account creation.
Database Connectivity Issue During Login

Given that the database is temporarily unavailable,
When a user attempts to log in,
Then the system should display a message indicating a login failure due to a server error.

Test Scenarios:
Successful Agent Creation

Given that a user is logged into Storybuilder,
When they attempt to create an agent,
Then the system should successfully register the agent and return confirmation.
Agent Creation with Invalid Data

Given that a user tries to create an agent with missing or invalid details,
When they submit the request,
Then the system should return an error message prompting the user to provide valid data.
Agent Addition Without User Login

Given that a user is not logged into Storybuilder,
When they attempt to create an agent,
Then the system should reject the request and prompt them to log in first.

Successful Agent Persona Selection

Given that a user has created an agent,
When they select a persona for the agent,
Then the system should assign the persona and confirm the selection.
Persona Selection Without Agent Creation

Given that a user has not yet created an agent,
When they attempt to select a persona,
Then the system should prevent the action and prompt the user to create an agent first.
Agent Persona Selection Fails Due to System Error

Given that the system encounters an issue while assigning a persona,
When a user attempts to select a persona,
Then the system should return an appropriate error message and allow the user to retry.
