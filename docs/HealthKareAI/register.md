# Register API

- **Endpoint:** `/auth/register`
- **Method:** POST
- **Description:** Registers a new user and returns a JWT token.
- **Request Body:**
  ```json
  {
    "username": "newuser@example.com",
    "password": "newpassword",
    "phone": "+1234567890",
    "role": "user"
  }
  ```
- **Responses:**
  - **200 OK**
    ```json
    { "message": "User created", "data": {}, "token": "jwt.token.here" }
    ```
  - **400 Bad Request**
    ```json
    { "message": "User creation failed" }
    ```
- **Example:**
  ```bash
  curl -X POST http://<your-server-address>/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"newuser@example.com", "password":"newpassword", "phone":"+1234567890", "role":"user"}'
  ```