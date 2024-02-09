# Update User Password API

## Endpoint

`POST /user/update/password`

## Description

Allows authenticated users to update their password.

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
  "password": "newPassword"
}
```

## Response

### Success

- **Status Code:** 200 OK

```json
{
  "message": "User password updated",
  "data": {}
}
```

### Error

- **Status Code:** 400 Bad Request

```json
{
  "message": "User password update failed",
  "error": "<Error detail>"
}
```