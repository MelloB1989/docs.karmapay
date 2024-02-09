# Get User Details API

## Endpoint

`POST /user/get/details`

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
  "username": "exampleUser"
}
```

## Response

### Success

- **Status Code:** 200 OK

```json
{
  "data": {}
}
```

### Error

- **Status Code:** 400 Bad Request

```json
{
  "message": "User does not exists",
  "error": "<Error detail>"
}
```