# Get Hospital Details API

## POST `/v1/hospital/details`

Retrieves details of a hospital.

### Request Body

- `ownerEmail` (string): Email address of the hospital's owner.

### Responses

#### Success (200 OK)

```json
{
  "data": "Details of the requested hospital."
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