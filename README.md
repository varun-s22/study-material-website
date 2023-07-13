# wised-study-material-assignment

This repo, is a assignment repository for Wised. Its a website for publishing your own study material / check out existing materials.
This is a free to use, and open source website for the same motive

## Features

- Its a free and open source website for joining courses online for students.
- If you're an instructor, you can also upload your courses for free.
- Students can also get to download the material, for later use.
- Its free of any sort of subscription, and authentication. Its FOR THE PEOPLE - BY THE PEOPLE

## Setup

- Get the repository, via `git clone`.

  ### Server

  - Install [MongoDB](https://www.mongodb.com/try/download/community) on your device
  - Make sure that the database service (mongo) is running on the background.
  - Go to `/server` directory.
  - Run `npm install` to get the dependencies.
  - Run `npm start` to start the Express server.
  - The express server is hosted on port 5000, and so the server link will be `localhost:5000`

  ### Client

  - On another terminal window/tab, open the `/client` directory.
  - Run `npm install` to get the dependencies
  - Run `npm run dev` to start the React server
  - The React server is hosted on port 5173, and so you can visit `localhost:5173` to check out the client

## Deliverables

- [x] Set up server, and database connections
- [x] Add route to upload materials, and sync with database
- [x] Add other routes, like searching .etc
- [x] Set up designs for front-end
- [x] Get front-end to work, and some unit tests
