# getAllBikes API Documentation

## Meta Information

- **Name**: getAllBikes
- **Type**: HTTP
- **Sequence**: 3

## HTTP GET Request

### URL

`http://localhost:3000/v1/bikes/get`

### Request Body

No request body needed.

### Authentication

This API endpoint requires Bearer Token authentication.

#### Bearer Token

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Iis5MTk4MTI5NDA3MDYiLCJ1aWQiOiJhZnJ3dXZkXzFqIn0.se2WRRJhST9uvOyhTwunvJiiMYD-RYfKqfXPMN2NnE0
```

## Usage Example

### cURL

```sh
curl -X GET "http://localhost:3000/v1/bikes/get" \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Iis5MTk4MTI5NDA3MDYiLCJ1aWQiOiJhZnJ3dXZkXzFqIn0.se2WRRJhST9uvOyhTwunvJiiMYD-RYfKqfXPMN2NnE0"
```

### JavaScript (Fetch API)

```javascript
fetch('http://localhost:3000/v1/bikes/get', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Iis5MTk4MTI5NDA3MDYiLCJ1aWQiOiJhZnJ3dXZkXzFqIn0.se2WRRJhST9uvOyhTwunvJiiMYD-RYfKqfXPMN2NnE0'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

## Notes

- Ensure that your bearer token is valid and not expired.
- Replace the example token with the actual token provided during the authentication process.
- The API endpoint should be accessible from the specified `localhost` server; make sure your server is running and accessible.
