# Mekimi financial meetings system

A base-project web application, with an Express.js backend API and React frontend.

## Prerequisites

- Node.js (v22+) [https://nodejs.org/en/download]
- Yarn [https://classic.yarnpkg.com/lang/en/docs/install]
- Git [https://github.com/git-guides/install-git]

## Quick Start

### Backend

```bash
# Navigate to backend directory
cd packages/backend

# Install dependencies
yarn install

# Create .env file
echo "PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
SUPABASE_URL=URL_HERE
SUPABASE_KEY=API_KEY_HERE" > .env

# Start dev server
yarn dev
```

The backend runs at http://localhost:3001

### Frontend

```bash
# Navigate to frontend directory
cd packages/frontend

# Install dependencies
yarn install

# Create environment file
echo "REACT_APP_API_URL=http://localhost:3001/api" > .env.development

# Start dev server
yarn start
```
The frontend runs at http://localhost:3000


## Development

- Run both backend and frontend servers in separate terminals
- Both servers auto-reload on code changes
- In the packages/backend/scripts are two useful code snippets:
    1) how to connect to supermarkets and download their data
    2) how to interact with our supabase db (Read/write)


### Backend - Deploying to Render.com
This project uses Render for backend hosting. The deployment process is fully automated:
- All merges to the `main` branch automatically trigger a new deployment
- No manual deployment steps required after initial project setup
- Pull requests automatically create preview deployments

### Frontend - Deploying to Vercel.com
This project uses Vercel for frontend hosting. The deployment process is fully automated:
- All merges to the `main` branch automatically trigger a new deployment
- No manual deployment steps required after initial project setup
- Pull requests automatically create preview deployments

Make sure to set the `REACT_APP_API_URL` environment variable in Vercel to point to your Render backend URL.

## Deployment troubleshooting

The env variables need to be changed in render/vercel.
In render we must make sure not to set NODE_ENV to production because then we don't get the types installed (use `dev` instead)
In vercel we must set the REACT_APP_API_URL manually. For some reason it doesn't take from the .env.production