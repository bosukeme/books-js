A full-stack web application with a **Vite + React** frontend and a **Node.js Express** backend.

## Table of Contents

- [Overview](#overview)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Running Test](#running-test)
- [Docker Setup](#docker-setup)
- [Contributing](#contributing)
- [License](#license)

## Overview

This repository contains a full-stack web application, with a **Vite + React** frontend and an **Express** backend. The backend API serves data to the frontend, providing a seamless user experience.

## Technologies

### Frontend
- **Vite**: Frontend tooling for fast builds and hot module replacement.
- **React**: JavaScript library for building user interfaces.
- **Axios** (or **Fetch**): For making API requests.
- **React Router**: For routing.

### Backend
- **Node.js**: JavaScript runtime environment.
- **Express**: Web application framework.
- **Cors**: To handle Cross-Origin Resource Sharing.
- **dotenv**: For environment variable management.

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/) package manager


### Clone the Repository
```bash
git clone https://github.com/bosukeme/books-js.git
cd books-js
```

### Backend Setup 
- Navigate to the backend directory:
```bash
cd backend
```

- Install dependencies:
```bash
npm install
```

- Create a .env file in the backend directory:
Check .env.sample for the expected keys
```bash
PORT=3000
DATABASE_URL=your_database_url_here
```

- Start the backend server:
```bash
npm run start
```

### Frontend Setup

- Open a different terminal and Navigate to the frontend directory:
```bash
cd frontend
```

- Install dependencies:
```bash
npm install
```

- Create a .env file in the frontend directory:
Check .env.sample for the expected keys
``` bash
VITE_API_BASE_URL=http://localhost:3000
```

- Start the frontend server:
```bash
npm start
```


## Usuage
After setting up both the frontend and backend, you should have:

- Backend running on http://localhost:3000
- Frontend running on http://localhost:5173 (or the port specified by Vite)

Visit the frontend url to view the project


## running test
Navigate to the backend folder and run
``` bash
npm test
``` 


## docker setup
If you prefer to run the application with docker

```bash
cd backend
docker compose up --build
```

```bash
cd frontend
docker compose up --build
```

## Contributing
If you would like to contribute, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bugfix.
- Submit a pull request.

## Authors

Ukeme Wilson
- <a href="https://www.linkedin.com/in/ukeme-wilson-4825a383/">Linkedin</a>.
- <a href="https://medium.com/@ukemeboswilson">Medium</a>.
- <a href="https://www.ukemewilson.sbs/">Website</a>.
