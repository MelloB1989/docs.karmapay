# Verify Hospital OTP API

## POST `/v1/hospital/otpVerify`

Verifies the OTP sent to the hospital owner's phone.

### Request Body

- `ownerEmail` (string): Email address of the hospital's owner.
- `otp` (string): OTP received by the owner.

### Responses

#### Success (200 OK)

```json
{
  "message": "OTP verified",
  "token": "JWT Token for authentication"
}
```

#### Error (401 Unauthorized)

```json
{
  "message": "Unauthorized"
}
```