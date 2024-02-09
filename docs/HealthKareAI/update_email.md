# Update User Email API

## Endpoint

`POST /user/update/email`

## Description

Allows authenticated users to update their email address.

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
  "email": "newemail@example.com"
}
```

## Response

### Success

- **Status Code:** 200 OK

```json
{
  "message": "User email updated",
  "data": {}
}
```

### Error

- **Status Code:** 400 Bad Request

```json
{
  "message": "User email update failed",
  "error": "<Error detail>"
}
```