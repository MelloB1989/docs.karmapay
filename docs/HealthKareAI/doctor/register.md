# Register Doctor API

## POST `/v1/doctor/register`

Registers a new doctor.

### Request Body

- `name` (string): Doctor's name.
- `role` (string): Doctor's role.
- `email` (string): Doctor's email.
- `phone` (string): Doctor's phone number.
- `clinicLocation` (string): Location of the clinic.
- `specialization` (string): Doctor's specialization.
- `experience` (number): Years of experience.
- `password` (string): Account password.

### Responses

#### Success (200 OK)

```json
{
  "data": "Doctor registration details"
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