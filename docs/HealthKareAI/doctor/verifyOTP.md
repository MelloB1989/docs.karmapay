# Verify Doctor OTP API

## POST `/v1/doctor/otpVerify`

Verifies the OTP sent to the doctor's phone.

### Request Body

- `email` (string): Doctor's email.
- `otp` (string): OTP received by the doctor.

### Responses

#### Success (200 OK)

```json
{
  "message": "OTP verified",
  "token": "JWT Token"
}
```

#### Error (401 Unauthorized)

```json
{
  "message": "Unauthorized"
}
```