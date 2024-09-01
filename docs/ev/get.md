# API Documentation

## getAllBikes

### Meta Information
- **Name:** getAllBikes
- **Type:** HTTP
- **Sequence:** 3

### Endpoint Description

The `getAllBikes` API endpoint is used to retrieve a list of all bikes available in the system.

### HTTP Request

- **Method:** GET
- **URL:** `http://localhost:3000/v1/bikes/get`
- **Body:** None

### Authentication

This endpoint requires Bearer token authentication. You must include a valid token in the Authorization header of your request.

#### Authorization Header

```plaintext
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Iis5MTk4MTI5NDA3MDYiLCJ1aWQiOiJhZnJ3dXZkXzFqIn0.se2WRRJhST9uvOyhTwunvJiiMYD-RYfKqfXPMN2NnE0
```

### Example cURL Request

```sh
curl -X GET "http://localhost:3000/v1/bikes/get" \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Iis5MTk4MTI5NDA3MDYiLCJ1aWQiOiJhZnJ3dXZkXzFqIn0.se2WRRJhST9uvOyhTwunvJiiMYD-RYfKqfXPMN2NnE0"
```

### Response

```json
{
  "bikes": [
    {
      "id": "1",
      "model": "Mountain Bike",
      "status": "available"
    },
    {
      "id": "2",
      "model": "Road Bike",
      "status": "rented"
    }
    // Additional bikes...
  ]
}
```

### Description

- **id:** The unique identifier for the bike.
- **model:** The model of the bike.
- **status:** The current status of the bike (e.g., "available", "rented").

### Notes

- Make sure your Bearer token is not expired.
- The `getAllBikes` endpoint does not require any request body parameters.
- The provided example token is for demonstration purposes only. Use a valid token to authenticate your requests.