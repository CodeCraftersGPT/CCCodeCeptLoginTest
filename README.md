CCCodeCeptLoginTest
This repository contains a simple CodeceptJS test that automates the login functionality for a demo web application using Node.js 18 and Puppeteer.

Prerequisites
To run this project locally, you will need:

Node.js (version 18 or later)
npm (comes with Node.js)
Getting Started
1. Clone the Repository
Clone this repository to your local machine:

bash
Copy code
git clone https://github.com/CodeCraftersGPT/CCCodeCeptLoginTest.git
cd CCCodeCeptLoginTest
2. Install Dependencies
Install the required Node.js packages:

bash
Copy code
npm install
This will install CodeceptJS and Puppeteer, which are used to run the browser automation tests.

3. Running the Test
To execute the login test, use the following command:

bash
Copy code
npx codeceptjs run --steps
This will:

Launch a headless Chrome browser.
Navigate to the demo login page: http://the-internet.herokuapp.com/login.
Enter the username and password (tomsmith / SuperSecretPassword!).
Verify that the login is successful by checking for a success message.
4. Customizing the Test
If you'd like to modify or extend the test:

Navigate to the tests folder.
Edit the file login_test.js to add new test scenarios.
Folder Structure
bash
Copy code
CCCodeCeptLoginTest/
│
├── node_modules/             # Project dependencies
├── tests/                    # Folder containing test scripts
│   └── login_test.js         # CodeceptJS test for login functionality
├── codecept.conf.js          # CodeceptJS configuration file
├── package.json              # Project configuration file
└── README.md                 # Instructions to run the project
5. Troubleshooting
Ensure Node.js 18 or later is installed. You can verify your Node.js version using:
bash
Copy code
node -v
If Puppeteer fails to launch the browser, ensure that Google Chrome is installed.
License
This project is licensed under the MIT License.