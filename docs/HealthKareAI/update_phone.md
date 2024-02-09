# Update User Phone API

## Endpoint

`POST /user/update/phone`

## Description

Allows authenticated users to update their phone number.

## Authentication

This route requires authentication. Ensure the request includes a valid JWT token.

## Request

### Headers

- `Content-Type`: application/json
- `Authorization`: Bearer `<JWT_TOKEN>`

### Body

```json
{
  "username": "exampleUser",
  "phone": "+1234567890"
}
```

## Response

### Success

- **Status Code:** 200 OK

```json
{
  "message": "User phone updated",
  "data": {}
}
```

### Error

- **Status Code:** 400 Bad Request

```json
{
  "message": "User phone update failed",
  "error": "<Error detail>"
}
```