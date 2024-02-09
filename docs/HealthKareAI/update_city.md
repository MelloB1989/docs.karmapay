# Update User City API

## Endpoint

`POST /user/update/city`

## Description

Allows authenticated users to update their city.

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
  "city": "New City"
}
```

## Response

### Success

- **Status Code:** 200 OK

```json
{
  "message": "User city updated",
  "data": {}
}
```

### Error

- **Status Code:** 400 Bad Request

```json
{
  "message": "User city update failed",
  "error": "<Error detail>"
}
```