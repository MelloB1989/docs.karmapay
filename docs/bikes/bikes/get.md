# API Documentation

## Meta Information

- **Name**: getAllBikes
- **Type**: HTTP
- **Sequence**: 3

## Endpoint: Get All Bikes

### GET Request

- **URL**: `http://localhost:3000/v1/bikes/get`
- **Body**: None
- **Authentication**: Bearer token required

### Authentication

The endpoint requires a Bearer token for authentication. Below is an example token:

```plaintext
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Iis5MTk4MTI5NDA3MDYiLCJ1aWQiOiJhZnJ3dXZkXzFqIn0.se2WRRJhST9uvOyhTwunvJiiMYD-RYfKqfXPMN2NnE0
```

### Example CURL Command

```bash
curl -X GET 'http://localhost:3000/v1/bikes/get' \
     -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Iis5MTk4MTI5NDA3MDYiLCJ1aWQiOiJhZnJ3dXZkXzFqIn0.se2WRRJhST9uvOyhTwunvJiiMYD-RYfKqfXPMN2NnE0'
```

### Response

- **Status Code**: 200 OK
- **Content-Type**: application/json

#### Example Response Body

```json
[
    {
        "id": "1",
        "model": "Mountain Bike",
        "brand": "Brand A",
        "color": "Red"
    },
    {
        "id": "2",
        "model": "Road Bike",
        "brand": "Brand B",
        "color": "Blue"
    }
]
```

### Notes

- Ensure the Bearer token is valid and active.
- This endpoint returns a list of all available bikes with their respective details.