# Ererw3 Drive
A google drive type application made using [React](https://reactjs.org/) and [Firebase](https://firebase.google.com/).

### The webapp has now been deployed on [Github Pages](https://helewrer3.github.io/Ererw3-Drive).

## Technologies Used
+ ReactJS
+ Firebase
    + Authentication
    + Firestore Database
    + Storage
+ React Router DOM
+ Bootstrap
+ React Bootstrap
+ UUID
+ React GH Pages
+ HTML, CSS, Javascript

## Usage
+ Login/Signup into the app.
+ Made folders to organize out your drive.
+ Upload files as you see fit.

## Dependencies
To run this app locally, you need to have [NodeJS](https://nodejs.org/en/) and [React](https://reactjs.org/) installed in your system.

## Deploying Locally
+ Clone the repo locally.
+ Make a `.env.local` file and populate the following fields inside it with the corresponding Firebase Configuration values -
    + ```
      REACT_APP_FIREBASE_API_KEY                //apiKey
      REACT_APP_FIREBASE_AUTH_DOMAIN            //authDomain
      REACT_APP_FIREBASE_PROJECT_ID             //projectId
      REACT_APP_FIREBASE_STORAGE_BUCKET         //storageBucket
      REACT_APP_FIREBASE_MESSAGING_SENDER_ID    //messagingSenderId
      REACT_APP_FIREBASE_MESSAGING_APP_ID       //appId
+ Run the following commands - 
    + ```
      npm install
      npm start
