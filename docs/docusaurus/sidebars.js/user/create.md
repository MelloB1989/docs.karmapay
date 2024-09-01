# API Documentation

## Create User Subscription

This API endpoint allows you to create a new user subscription.

### Endpoint

- **URL:** `http://localhost:3000/v1/user_subscription/create`
- **Method:** `POST`

### Request Headers

- **Authorization:** Bearer token required
  ```
  Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Iis5MTk4MTI5NDA3MDYiLCJ1aWQiOiIwXzZpaGFjanJyIn0.Rf1ZUJpJdBBbep4cGCqwBQ2A8IyETp2UTrnecGHdi6I
  ```

### Request Body

The request body should be in JSON format and should include the following fields:

```json
{
  "subscription_id": "ftx0li8efd",
  "start_date": "27/11/2004",
  "end_date": "27/11/2004"
}
```

### Example Request

```bash
curl -X POST "http://localhost:3000/v1/user_subscription/create" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Iis5MTk4MTI5NDA3MDYiLCJ1aWQiOiIwXzZpaGFjanJyIn0.Rf1ZUJpJdBBbep4cGCqwBQ2A8IyETp2UTrnecGHdi6I" \
  -H "Content-Type: application/json" \
  -d '{
        "subscription_id": "ftx0li8efd",
        "start_date": "27/11/2004",
        "end_date": "27/11/2004"
      }'
```

### Authentication

This endpoint requires Bearer Token authentication. Ensure that you include the following token in your request header:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Iis5MTk4MTI5NDA3MDYiLCJ1aWQiOiIwXzZpaGFjanJyIn0.Rf1ZUJpJdBBbep4cGCqwBQ2A8IyETp2UTrnecGHdi6I
```

### Response

A successful response will include:

- **Status Code:** `200 OK`
- **Body:** The details of the created subscription (if available)

### Error Responses

In case of an error, the response will include:

- **Status Code:** Corresponding error code (e.g., `400 Bad Request`, `401 Unauthorized`)
- **Body:** Error message detailing what went wrong

Please ensure that the dates are formatted correctly and that the subscription ID is valid.