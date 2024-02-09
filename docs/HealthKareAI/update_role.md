# Update User Role API

## Endpoint

`POST /user/update/role`

## Description

Allows authenticated users to update their role.

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
  "role": "newRole"
}
```

## Response

### Success

- **Status Code:** 200 OK

```json
{
  "message": "User role updated",
  "data": {}
}
```

### Error

- **Status Code:** 400 Bad Request

```json
{
  "message": "User role update failed",
  "error": "<Error detail>"
}
```