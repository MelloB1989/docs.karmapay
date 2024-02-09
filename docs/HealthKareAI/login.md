# Login API

- **Endpoint:** `/auth/login`
- **Method:** POST
- **Description:** Authenticates a user and sends an OTP to the user's phone.
- **Request Body:**
  ```json
  {
    "username": "user@example.com",
    "password": "yourpassword"
  }
  ```
- **Responses:**
  - **200 OK**
    ```json
    { "message": "OTP sent" }
    ```
  - **401 Unauthorized**
    ```json
    { "message": "Unauthorized" }
    ```
- **Example:**
  ```bash
  curl -X POST http://<your-server-address>/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"user@example.com", "password":"yourpassword"}'
  ```