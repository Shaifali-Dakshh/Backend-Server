# Backend-Server
## Description

This repository contains the backend server for Slidely Task 2. The server is built using Express and TypeScript, and it uses a JSON file (`db.json`) as a database to store form submissions.

## Endpoints

### `/ping`
- **Method:** GET
- **Description:** Always returns `true`.
- **Response:**
  ```json
  {
    "success": true
  }
