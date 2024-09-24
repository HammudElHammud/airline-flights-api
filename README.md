# Fellas - Backend API

This is the backend API for the Fellas React application, designed to manage airline destinations and flight bookings. The API supports registration and login functionalities and connects to a MongoDB database.

## Overview

Fellas is a node application designed to connect with a REACT app for airline destinations and flight bookings.


## Prerequisites

Ensure you have npm and Node.js installed on your local machine.

To check if npm is installed, run:
```
npm -v
```

If these commands are not recognized, you can install Node.js and npm from [Node.js Downloads](https://nodejs.org/en/download/package-manager).

Linux Installation
For Linux users, install Node.js and npm using the following commands:

```
sudo apt update
sudo apt install nodejs
sudo apt install npm
nodejs -v # to check Node.js version
npm -v # to check npm version

```

# Getting Started

1- Clone the repository:

```
git clone https://github.com/HammudElHammud/airline-flights-api.git
cd airline-flights-api

```

2- Install dependencies:

```
npm install --force

```

3- Run the application:

```
npm start

```

Open [http://localhost:4000](http://localhost:4000) to view the application in your browser. The page will reload when
you make changes and you
may see lint errors in the console.

# Environment Configuration


The `.env` file includes:

```
PORT=4000
DB_PASSWORD=mongodb-password
DB_USERNAME=mongodb-username
SCHIPHOL_APP_APP_ID=SCHIPHOL-app-id
SCHIPHOL_APP_APP_KEY= SCHIPHOL-app-key
SCHIPHOL_URL=https://api.schiphol.nl/public-flights/

```


# Features
- Schiphol API CONNECT:
  The application supports to connect to `//api.schiphol.nl/public-flights/ ` to get flights airline etc
- Auth,
- Save booking flights and list it

