# 3. Signup

## Description
The Signup API is used to create a new user account by providing required details like phone number, OTP, email, name, date of birth, and password.

### Endpoint

- **URL:** `{{BASE_URL}}/v1/auth/signup`
- **Method:** `POST`
- **Authentication:** None required

### Request Headers

No specific headers are required for this request.

### Request Body

The body of the request should be sent in JSON format.

#### JSON Parameters:

| Parameter     | Type   | Description                              | Required |
|---------------|--------|------------------------------------------|----------|
| phone         | string | The user's phone number. Example: `"+917569236628"` | Yes      |
| otp           | string | The OTP (One-Time Password) received by the user. Example: `"316892"` | Yes      |
| email         | string | The user's email address. Example: `"kartikdd90@gmail.com"` | Yes      |
| first_name    | string | The user's first name. Example: `"Kartik"` | Yes      |
| last_name     | string | The user's last name. Example: `"Deshmukh"` | Yes      |
| date_of_birth | string | The user's date of birth in `dd/mm/yyyy` format. Example: `"27/11/2004"` | Yes      |
| password      | string | The user's chosen password. Example: `"new"` | Yes      |

Example JSON body:

```json
{
  "phone": "+917569236628",
  "otp": "316892",
  "email": "kartikdd90@gmail.com",
  "first_name": "Kartik",
  "last_name": "Deshmukh",
  "date_of_birth": "27/11/2004",
  "password": "new"
}
```

### Response

The API will return a response based on the success or failure of the signup attempt. The response format and content will depend on the specific implementation.

### Example Request

```bash
curl -X POST "{{BASE_URL}}/v1/auth/signup" \
-H "Content-Type: application/json" \
-d '{
  "phone": "+917569236628",
  "otp": "316892",
  "email": "kartikdd90@gmail.com",
  "first_name": "Kartik",
  "last_name": "Deshmukh",
  "date_of_birth": "27/11/2004",
  "password": "new"
}'
```

### Example Response

```json
{
  "status": "success",
  "user_id": "unique-user-id-here",
  "message": "User successfully registered."
}
```

### Notes

- Ensure that all required fields are provided in the request body.
- Replace `{{BASE_URL}}` with the actual base URL of your API server (e.g., `http://localhost:9080`).