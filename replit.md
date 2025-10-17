# Ultimate Sports

## Overview
Ultimate Sports by SHAKULPRIME is a web application showcasing information about various sports including Football, Motocross, Supercross, Enduro, F1, and MXoN. The website features interactive cards displaying athletes, drivers, leagues, and teams with detailed profiles.

## Recent Changes (October 17, 2025)
- Imported project from GitHub and configured for Replit environment
- Fixed HTML syntax errors (script tag and JavaScript object formatting)
- Reorganized project structure with backend/ and public/ directories
- Configured Node.js Express server with static file serving
- Set up deployment configuration for autoscale
- Server runs on port 5000 with proper host configuration (0.0.0.0)

## Project Architecture

### Structure
```
ultimate-sports-web/
├── backend/
│   └── server.js          # Express server with API endpoints
├── public/
│   ├── index.html         # Main frontend file
│   └── motocross-rider-action-motocross-sport.jpg
├── package.json
├── .gitignore
└── replit.md
```

### Technology Stack
- **Frontend**: Static HTML/CSS/JavaScript
- **Backend**: Node.js with Express
- **Dependencies**: express, node-fetch, cors, dotenv

### Features
1. **Sports Sections**
   - Football Leagues & Competitions (EPL, La Liga, Serie A, etc.)
   - Motocross Riders (Ken Roczen, Eli Tomac, Jeffrey Herlings, etc.)
   - Supercross Riders
   - Enduro Riders
   - F1 Drivers (Lewis Hamilton, Max Verstappen, etc.)
   - MXoN Teams (USA, France, Belgium, etc.)

2. **Interactive Elements**
   - Clickable cards that open modals with athlete/team information
   - Show More/Show Less buttons for expandable sections
   - Animated intro header
   - Donation form (frontend only, not connected to payment processor)

3. **Backend API**
   - `/api/chat` endpoint for OpenAI integration (requires API key)
   - Static file serving from public directory

## Configuration

### Environment Variables
The application uses the following environment variables:
- `PORT`: Server port (default: 5000)
- `OPENAI_API_KEY`: OpenAI API key for chat functionality (optional)

### Running the Application
The server is configured to run with:
```bash
npm start
```

### Deployment
Configured for autoscale deployment with the npm start command.

## User Preferences
None specified yet.

## Notes
- The chat API endpoint requires an OpenAI API key to function
- The donation form is currently a frontend-only feature
- Static assets are served from the public/ directory
