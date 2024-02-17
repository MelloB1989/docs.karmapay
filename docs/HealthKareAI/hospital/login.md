# Hospital Login API

## POST `/v1/hospital/login`

Authenticates a hospital owner and sends an OTP for verification.

### Request Body

- `ownerEmail` (string): Email address of the hospital's owner.
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
  "error": "Error message describing the failure."
}
```