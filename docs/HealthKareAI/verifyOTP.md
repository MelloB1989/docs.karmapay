# OTP Verification API

- **Endpoint:** `/auth/verifyOTP`
- **Method:** POST
- **Description:** Verifies the OTP sent to the user's phone during login.
- **Request Body:**
  ```json
  {
    "username": "user@example.com",
    "otp": "123456"
  }
  ```
- **Responses:**
  - **200 OK**
    ```json
    { "message": "OTP verified", "token": "jwt.token.here" }
    ```
  - **401 Unauthorized**
    ```json
    { "message": "Unauthorized" }
    ```
- **Example:**
  ```bash
  curl -X POST http://<your-server-address>/auth/verifyOTP \
  -H "Content-Type: application/json" \
  -d '{"username":"user@example.com", "otp":"123456"}'
  ```