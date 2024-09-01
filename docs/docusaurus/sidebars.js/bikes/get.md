# getAllBikes API Documentation

## Meta Information

- **Name:** getAllBikes
- **Type:** HTTP
- **Sequence:** 3

## HTTP Request

- **Method:** GET
- **URL:** `http://localhost:3000/v1/bikes/get`
- **Request Body:** None
- **Authentication:** Bearer Token

## Authentication

To access this endpoint, a bearer token must be included in the request headers.

```http
Authorization: Bearer <token>
```

### Example Token

Here is an example bearer token for demonstration purposes. Replace this token with a valid one as required.

```plaintext
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Iis5MTk4MTI5NDA3MDYiLCJ1aWQiOiJhZnJ3dXZkXzFqIn0.se2WRRJhST9uvOyhTwunvJiiMYD-RYfKqfXPMN2NnE0
```

## Example Request

Below is an example of how to make a request to the getAllBikes API using curl:

```sh
curl -X GET http://localhost:3000/v1/bikes/get \
     -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Iis5MTk4MTI5NDA3MDYiLCJ1aWQiOiJhZnJ3dXZkXzFqIn0.se2WRRJhST9uvOyhTwunvJiiMYD-RYfKqfXPMN2NnE0"
```

This request will return a list of all available bikes.

## Response

The response will be in JSON format and will contain a list of bikes. Example response:

```json
[
    {
        "id": "bike_1",
        "model": "Mountain Bike",
        "status": "available"
    },
    {
        "id": "bike_2",
        "model": "Road Bike",
        "status": "rented"
    }
]
```