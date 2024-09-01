# API Documentation: getAllBikes

## Meta Information
- **Name**: getAllBikes
- **Type**: HTTP
- **Sequence**: 3

## HTTP GET Request

### Endpoint
```
GET http://localhost:3000/v1/bikes/get
```

### Request Body
None

### Authentication
- **Type**: Bearer Token
- **Token**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Iis5MTk4MTI5NDA3MDYiLCJ1aWQiOiJhZnJ3dXZkXzFqIn0.se2WRRJhST9uvOyhTwunvJiiMYD-RYfKqfXPMN2NnE0`

To access the endpoint, include the following in the header of your HTTP request:
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Iis5MTk4MTI5NDA3MDYiLCJ1aWQiOiJhZnJ3dXZkXzFqIn0.se2WRRJhST9uvOyhTwunvJiiMYD-RYfKqfXPMN2NnE0
```

## Example Request

```sh
curl -X GET "http://localhost:3000/v1/bikes/get" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Iis5MTk4MTI5NDA3MDYiLCJ1aWQiOiJhZnJ3dXZkXzFqIn0.se2WRRJhST9uvOyhTwunvJiiMYD-RYfKqfXPMN2NnE0"
```

## Response

### Successful Response (200 OK)
```json
{
  "status": "success",
  "data": [
    {
      "id": "bike_1",
      "model": "Mountain Bike",
      "brand": "Brand A",
      "rentalPrice": 15
    },
    {
      "id": "bike_2",
      "model": "Road Bike",
      "brand": "Brand B",
      "rentalPrice": 20
    }
    // Additional bike objects...
  ]
}
```

### Error Response (401 Unauthorized)
```json
{
  "status": "error",
  "message": "Unauthorized: Invalid or missing Authentication token."
}
```

### Error Response (500 Internal Server Error)
```json
{
  "status": "error",
  "message": "An unexpected error has occurred."
}
```

## Notes
- Ensure that the Bearer token is up-to-date and valid to access the endpoint successfully.
- Check for network issues or server downtime if a 500 error occurs.