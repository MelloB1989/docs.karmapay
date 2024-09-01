# API Documentation

## getAllBikes

### Overview
The `getAllBikes` API is a RESTful endpoint that retrieves all available bikes. This endpoint requires bearer token authentication.

- **Type:** HTTP
- **Sequence:** 3

### HTTP Request

#### Endpoint
```
GET http://localhost:3000/v1/bikes/get
```

#### Headers
```
Authorization: Bearer <token>
```

#### Body
None

### Authentication
This endpoint requires a Bearer token for authentication. Below is an example token:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Iis5MTk4MTI5NDA3MDYiLCJ1aWQiOiJhZnJ3dXZkXzFqIn0.se2WRRJhST9uvOyhTwunvJiiMYD-RYfKqfXPMN2NnE0
```

### Example Request
```bash
curl -X GET http://localhost:3000/v1/bikes/get \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Iis5MTk4MTI5NDA3MDYiLCJ1aWQiOiJhZnJ3dXZkXzFqIn0.se2WRRJhST9uvOyhTwunvJiiMYD-RYfKqfXPMN2NnE0"
```

### Response
The response will be a JSON array of bike objects. Below is an example of the response format:

```json
[
  {
    "id": "bike123",
    "model": "Mountain Bike X23",
    "status": "available"
  },
  {
    "id": "bike124",
    "model": "Road Bike R56",
    "status": "in_use"
  }
]
```

Each bike object contains the following fields:
- **id**: Unique identifier for the bike.
- **model**: Model name/number of the bike.
- **status**: Current status of the bike (`available`, `in_use`, etc.).

### Error Handling
Common errors include:

- **401 Unauthorized**: Returned if the bearer token is missing or invalid.
- **500 Internal Server Error**: Returned if there is an issue on the server side.

### Additional Notes
Ensure that the token used is valid and corresponds to a user with the appropriate permissions to access the bikes data.

---

This concludes the documentation for the `getAllBikes` API. If you have further questions, please refer to the accompanying documentation or contact the API support team.