# M4-G2

Code Repository for Group 2

# Jira Board link

[M4-B2](https://amielbenedict22.atlassian.net/jira/software/projects/M4/boards/2)
Access: [Check your Outlook inbox if you haven't already](https://outlook.office.com/mail/)

# TBC

# Mission Brief

You will complete this Mission independently. However, you will use a common Jira board to manage your tasks and have joint Daily Standups as a team. And you are encouraged to exchange ideas and information on how to complete the Mission without copying answers from each other.

## Sprint Planning

The team will meet at the beginning of the week to discuss and divide up tasks in this Mission.

## Use JIRA to manage team tasks

Continue to use ~~the same~~ Jira ~~board as the previous Mission~~ to manage all tasks. The team can enter high level tasks and/or sub-tasks into Jira. Team members will update Jira when they are working on a task or finished a task.

## Daily Standup

The team will run Daily Scrums for 5 days of the week at a set time agreed by the team. Each Daily Scrum should be less than 10 minutes in duration – with each team member taking turn to answering 3 Questions. Everyday after the Scrum meeting, send your trainer a message with a list of “blockers” discussed.

The following resource may help:

RECOMMENDED [How to run daily scrums effectively](http://www.base36.com/2013/03/how-to-run-an-effective-scrum-meeting/) (5 mins)

## Create an Insurance Recommendation Application using Generative AI

Create an application that chats with a user and then recommends the most suitable insurance policy based on the attributes of the users. Below is a description of the requirements.

### <ins>The user will see the following items.</ins>

- A `<div>` or textarea in the middle that displays both what the user typed and the response of the AI Interviewer. Each message will show up as the application receives the message.

- A textbox that allow users to type in response.

- A submit button that will submit the response to the application. Upon receiving the response, the application will send the response to generative AI via API to get a response.

### <ins>The AI functionality should be as follows.</ins>

- _Tina_ is the AI that acts as an insurance consultant to take some input from users and then provide the recommendation at the end. **It should ask a series of questions to the user, and can adjust its response based on the answers**.

- The flow will start with the Tina introducing itself and asking the “opt-in” question like the following: _"I’m Tina. I help you to choose right insurance policy. May I ask you a few personal questions to make sure I recommend the best policy for you?"_. It will only ask more questions if the user agrees to be asked.

- Other than the “opt-in” question, the questions should not be “hardcoded” in the prompt or in the code. But you can include the product names and descriptions in your prompt.

- Tina should not ask users for the answer directly, such as “what insurance product do you want”. But it can ask questions to uncover details to help identify which policy is better, such as _“do you need coverage for your own car or just 3rd party?”_.

- At the end, Tina should recommend one or more insurance products to the user and provide reasons to support the recommendation. The 3 insurance products are: **Mechanical Breakdown Insurance (MBI)**, **Comprehensive Car Insurance** & **Third Party Car Insurance**.

- There are 2 business rules: **MBI** is not available to trucks and racing cars. And **Comprehensive Car Insurance** is only available to any motor vehicles less than 10 years old.

- You will need to use generative AI to build the application. You are encouraged to use Google Gemini API because it is free of charge. OpenAI GPT-4 is a paid alternative. You can use it but you will be responsible for the costs incurred if you used any paid service for the Mission.

Tip: you do not need to understand the details of the insurance policies. Tina should do the job, not you as a developer.

The following resource may help:

RECOMMENDED [Google Gemini API Documentation](https://ai.google.dev/gemini-api/docs) (1 hour)

RECOMMENDED [Mechanical Breakdown Insurance (MBI) explained](https://www.moneyhub.co.nz/mechanical-breakdown-insurance.html) (15 mins)

RECOMMENDED [Comprehensive Car Insurance explained](https://www.moneyhub.co.nz/car-insurance.html) (15 mins)

RECOMMENDED [Third Party Car Insurance explained](https://www.moneyhub.co.nz/third-party-car-insurance.html) (15 mins)

## Containerise the Application

If your application is currently not running in containers, your task is to package your application into one or more docker containers, so that your application is easily portable to another platform. Typically you will package your front end in one container, and back end in another container, and connect the 2. You can run them on Minikube, Docker Composer, and/or Docker Swarm if you would like to network 2 containers.

The following resources may help:

RECOMMENDED: [Getting started with Docker](https://www.youtube.com/watch?v=pTFZFxd4hOI) (1 hour)

RECOMMENDED: [How to dockerise a React application](https://www.freecodecamp.org/news/how-to-dockerize-a-react-application/) (1 hour)

RECOMMENDED: [Node.js front end and back end on Docker](https://patrickdesjardins.com/blog/docker-nodejs-frontend-backend) (1 hour)

## Present at Show and Tell - Using Story Telling Techniques

At the Show and Tell, your team will present the tasks you have completed individually. This presentation should be designed to take around 5 minutes per person. The time limit will be strictly enforced. Remember to apply storytelling techniques. You can use PowerPoint slides, Sway or Prezi to help with your presentation. You are encouraged to demonstrate the live application.

## Submit your work

Before Show and Tell session, upload all of your work (screenshots, presentation slides, documents or other files) using the Mission Submission Form.
