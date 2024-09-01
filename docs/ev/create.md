# API Documentation

## Endpoint: Create User Subscription

### Description
This endpoint allows the creation of a new user subscription.

### Endpoint Information

- **Name**: create
- **Type**: HTTP
- **Sequence**: 1

### HTTP Request

- **Method**: POST
- **URL**: `http://localhost:3000/v1/user_subscription/create`
- **Body Type**: JSON
- **Authentication**: Bearer Token

### Authentication

- **Type**: Bearer
- **Token**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Iis5MTk4MTI5NDA3MDYiLCJ1aWQiOiIwXzZpaGFjanJyIn0.Rf1ZUJpJdBBbep4cGCqwBQ2A8IyETp2UTrnecGHdi6I`

### Request Body

```json
{
  "subscription_id": "ftx0li8efd",
  "start_date": "27/11/2004",
  "end_date": "27/11/2004"
}
```

### Sample Request

```bash
curl -X POST http://localhost:3000/v1/user_subscription/create \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Iis5MTk4MTI5NDA3MDYiLCJ1aWQiOiIwXzZpaGFjanJyIn0.Rf1ZUJpJdBBbep4cGCqwBQ2A8IyETp2UTrnecGHdi6I" \
-H "Content-Type: application/json" \
-d '{
  "subscription_id": "ftx0li8efd",
  "start_date": "27/11/2004",
  "end_date": "27/11/2004"
}'
```

### Response

The API will return a JSON object containing the details of the created subscription.

### Possible Responses

- **200 OK**: Subscription created successfully.
- **400 Bad Request**: Invalid request parameters.
- **401 Unauthorized**: Invalid or missing authentication token.
- **500 Internal Server Error**: An error occurred on the server.

### Notes
- Ensure the dates are in the correct format as specified.
- The token used for authentication should be kept secure and not exposed in client-side code.

---

*End of documentation*