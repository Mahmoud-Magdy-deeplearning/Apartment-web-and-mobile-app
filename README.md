# Apartments app

## Project Overview

This repository comprises three applications designed to manage apartment listings:

- **Backend Application(NestJS & PostgreSQL)**
  - Functions:
    - Fetch all apartments.
    - Fetch specific apartment.
    - Add new apartment.
    - 
- **Web Application (Next.js)**
  - Functions:
    - List all apartments.
    - Show specific apartment details.

- **Mobile Application (React Native with Expo)**
  - Functions:
    - List all apartments.
    - Show specific apartment details.

## Prerequisites

- NodeJS
- Yarn
- PostgreSQL
- Expo CLI

## Features

- **Responsive Design:** Ensures optimal display on various devices.
- **Validation** Maintains data integrity and user input accuracy.
- Fetch all apartments.
- Fetch specific apartment.
- Add new apartment.
- List all apartments.
- Show specific apartment details.
- Swagger.

## Installation
1. Clone the repository:
  - ```sh
    git clone https://github.com/Mahmoud-Magdy-deeplearning/Apartment-web-and-mobile-app.git
	cd Apartment-web-and-mobile-app
	```
2. Install dependencies:
  - ```sh
    # Install backend dependencies
    cd apartment-server
    yarn
    
    # Install mobile dependencies
    cd ../apartment-mobile-app
    npm install

    # Install web dependencies
    cd ../apartment-web-app
    npm install
	```
## Configuration
1. **Backend Configuration:**
	- Rename backend/.env.example to backend/.env and update the configuration variables.
2. **web and mobile Configuration:**
	- Rename frontend/.env.example to frontend/.env and update the configuration variables.

## Running the Application
1. **Run Backend:**

  - ```sh
   	# Inside the backend directory
	npm start
	```
    The server will start on http://localhost:5000.
2. **Run web:**
  - ```sh
   	# Inside the frontend directory
	npm run dev
	```
    The NextJS application will be accessible at http://localhost:3000.
3. **Run Mobile:**
  - ```sh
   	# Inside the frontend directory
	npx expo start
	```
    The ReactMative application will be accessible at http://localhost:8080.

## Usage
- Open your browser and navigate to http://localhost:3000 to access the application.
- Open you expo app from mobile and scan QR code.
- Open your browser and navigate to http://localhost:5000/api to access swagger.

## Author
Contact: [Mahmoud Magdy](mailto:mahmoudmagdymahmoud1@gmail.com)
