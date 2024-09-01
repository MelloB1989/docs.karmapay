# API Documentation

## getAllBikes

### Meta Information

- **Name:** getAllBikes
- **Type:** HTTP
- **Sequence:** 3

### HTTP GET Request

Retrieves all bikes from the server.

- **URL:** `http://localhost:3000/v1/bikes/get`
- **Body:** None
- **Auth Type:** Bearer Token

### Authorization

The API request requires a Bearer token for authorization. Use the following token:

- **Token:**
  ```
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Iis5MTk4MTI5NDA3MDYiLCJ1aWQiOiJhZnJ3dXZkXzFqIn0.se2WRRJhST9uvOyhTwunvJiiMYD-RYfKqfXPMN2NnE0
  ```

## Usage Example

Here is an example of how to make a request to get all bikes using `curl`:

```sh
curl -X GET http://localhost:3000/v1/bikes/get \
     -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Iis5MTk4MTI5NDA3MDYiLCJ1aWQiOiJhZnJ3dXZkXzFqIn0.se2WRRJhST9uvOyhTwunvJiiMYD-RYfKqfXPMN2NnE0"
```

Make sure to replace the URL, headers, and Bearer token with the appropriate values if they are subject to change.