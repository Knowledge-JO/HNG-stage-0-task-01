# HNG Internship - Backend Track

### Backend Task 01 - Stage 0

This is a simple Express API endpoint that returns JSON data containing my email, the URL of this GitHub repository, and the current time in ISO format.

[Hire nodejs developers](https://hng.tech/hire/nodejs-developers)

- **Public base URL**: `https://hng-stage-0-task-01.onrender.com`
- **Local base URL**: `http://localhost:3000`

## Endpoint

- **endpoint**: `/`
- **Method**: `GET`
- **Response**:
  ```json
  {
    "email": "megamindtheincredible@gmail.com",
    "current_datetime": "2023-10-05T12:34:56.789Z",
    "github_url": "https://github.com/Knowledge-JO/HNG-stage-0-task-01"
  }
  ```

## Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Knowledge-JO/HNG-stage-0-task-01.git
   cd your-repo-name
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the server**:

   ```bash
   npm start
   ```

## Example Usage

**Access the API**:
Open your browser or use a tool like Postman or cURL to visit:

```
https://hng-stage-0-task-01.onrender.com
```

**Response**:

```json
{
  "email": "megamindtheincredible@gmail.com",
  "current_datetime": "2023-10-05T12:34:56.789Z",
  "github_url": "https://github.com/Knowledge-JO/HNG-stage-0-task-01"
}
```

## Dependencies

- **Express**: A minimal and flexible Node.js web application framework.
