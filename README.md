# Credit Card Validation

Welcome to the "Credit Card Validation" project! This application allows users to validate credit card information and manage a list of validated credit cards. This README provides instructions for setting up and running the project.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variable](#environment-variable)
- [Usage](#usage)
- [Features](#features)
- [API Integration](#api-integration)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before running this project, make sure you have the following software installed:

- [Node.js](https://nodejs.org/) (at least version 14)
- [npm](https://www.npmjs.com/) (npm is included with Node.js)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/guru6163/credit-card-validation.git

2. Go to the Folder:
   ```bash
   cd credit-card-validation

3. Install Dependencies
   ```bash
   npm install

### API Integration
This project integrates with an external API for user authentication and credit card validation. The API endpoints are located in the api/api.js file. The base URL for the API is configured using the REACT_APP_API_BASE_URL environment variable.

Before running the application, make sure to set the API base URL by creating a .env file in the root directory and adding the following line:

```bash
REACT_APP_API_BASE_URL=https://cc-validator-backend.onrender.com


4. Start the development server
   ```bash
   npm start

## Features
#### Credit Card Validation: Validate credit card information using Luhn's algorithm.
#### Sign In and Sign Up: Users can sign in or create a new account.
#### Saved and Validated Cards: View and manage a list of saved and validated credit cards.
#### Loading and Error Feedback: Visual feedback for loading and error states using toasts and progress bar.


Folder Structure
Here's a high-level overview of the project's folder structure:

src: Contains the main source code files.
components: React components used in the application.
api: API integration and utility functions.
App.js: The main application component.
public: Public assets and the HTML template.
package.json: Project metadata and dependencies.