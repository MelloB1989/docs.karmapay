# Register Hospital API

## POST `/v1/hospital/register`

Registers a new hospital.

### Request Body

- `hospitalPhone` (string): Hospital's phone number.
- `hospitalEmail` (string): Hospital's email address.
- `legalName` (string): Legal name of the hospital.
- `location` (string): Location of the hospital.
- `ownerEmail` (string): Email address of the owner.
- `ownerName` (string): Name of the hospital owner.
- `ownerPhone` (string): Phone number of the owner.
- `startDate` (string): Start date of the hospital's operation.
- `password` (string): Account password for the hospital.

### Responses

#### Success (200 OK)

```json
{
  "data": "Registration details of the hospital."
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