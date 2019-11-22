# Ready, Set, Vote!

Ready, Set, Vote! is a tool that allows voters to get the information they need about the various candidates running for office so that they can make an informed decision.

This project is a rewrite of the existing production application, with a focus on using modern, reusable, and _most importantly_ extensibility. We want this site to be able to serve any municipality, not just Seattle. To do this, we need to create a more generic web application with the tools necessary to deploy the application for any municipality interested in using it.

Ready, Set, Vote! is a project of the [Municipal League](http://munileague.org/).

## Project Information

- [See the project Google Drive for more details](https://drive.google.com/drive/folders/1ObApLz2WMISnV-To0Ypb91ZAGj-XBye8?usp=sharing)

## Technology Stack

### Frontend

- React (created with react-scripts-ts) - Main UI library
- ~~Mobx - To provide a data store to React~~
- React Hooks (`useReducer`) replacing Mobx as the data store

### Backend

- Express - Server side routing
- Google Cloud Platform

### React Endpoints

#### Users

1. `/` - Landing page, allows for language selection
2. `/address` - Gets the user's address to find their ballot
3. `/ballot` - The actual ballot; the main piece of the site
4. `/email` - Allows the user to email themselves their completed ballot
5. `/guide` - Share or print your results

#### Admin

- `/admin` - Admin area of the site
- `/admin/districts` - Maintain the list of voting districts which you can later assign to Measures and Seats
- `/admin/seats` - Maintain the list of Seats to which you can later assign Candidates
- `/admin/candidates` - Maintain the list of Candidates running for office
- `/admin/measures` - Maintain the list of Measures
- `/admin/endorsers` - Maintain the list of Publications and other third-party Endorsers
- `/admin/endorsements/{id}` - Maintain the list of Endorsements for each Endorser
- `/admin/emails` - Generate a spreadsheet containing emails and demographic info for download

## Environment Setup


### Prerequisites

1. node / npm (if not already installed): https://www.npmjs.com/get-npm
2. Join us as a volunteer! On [DemocracyLab](https://www.democracylab.org/index/?section=AboutProject&id=77), click the "Contact Project" button in the upper-right. Enter a message requesting access to Slack and Github. Include your email address and GitHub username in the message.
4. Once you have access, the volunteer Slack is readysetvote2.slack.com


### Useful Tools

- [Postman](https://www.getpostman.com/downloads/) for crafting REST requests and inspecting responses
