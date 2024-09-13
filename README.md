ERP Repository Setup Guide
==========================

Prerequisites
-------------

* Node.js and npm installed on your system
* MongoDB installed and running locally

Step 1: Clone the Repository
---------------------------

* Open a terminal and type: `git clone <repo_name>` (replace `<repo_name>` with the actual repository name)
* Alternatively, you can download the repository as a zip file and extract it to a directory of your choice

Step 2: Install Dependencies (Client-side)
---------------------------------------

* Navigate to the `erp` directory: `cd erp`
* Navigate to the `cli` directory (client-side): `cd cli`
* Open a terminal and type: `npm install` to install dependencies

Step 3: Install Dependencies (Server-side)
---------------------------------------

* Navigate to the `erp` directory: `cd erp`
* Navigate to the `backend` directory (server-side): `cd backend`
* Open a terminal and type: `npm install` to install dependencies

Step 4: Run the Application
-------------------------

* Open a terminal and navigate to the `cli` directory (client-side): `cd cli`
* Type: `npm start` to start the client-side application
* Open a new terminal and navigate to the `backend` directory (server-side): `cd backend`
* Type: `npm start` to start the server-side application

Accessing the Application
----------------------

* Open a web browser and navigate to: `http://localhost:3001` to access the client-side application
* Open a new tab and navigate to: `http://localhost:3000` to access the server-side application

That's it! You should now have your ERP repository set up and running locally.
