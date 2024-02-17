# Doctor Login API

## POST `/v1/doctor/login`

Authenticates a doctor and sends an OTP for verification.

### Request Body

- `email` (string): Doctor's email.
- `password` (string): Account password.

### Responses

#### Success (200 OK)

```json
{
  "message": "OTP sent"
}
```

#### Error (401 Unauthorized)

```json
{
  "error": "Unauthorized!"
}
```

#### Error (405 Method Not Allowed)

Missing required fields:

```json
{
  "error": "Fields missing!"
}
```

#### Error (500 Internal Server Error)

```json
{
  "error": "Error message"
}
```