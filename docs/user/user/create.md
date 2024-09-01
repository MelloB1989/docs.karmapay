# API Documentation

## Create User Subscription

This API endpoint allows you to create a new user subscription.

### Endpoint Details

- **Name**: create
- **Type**: HTTP
- **Sequence**: 1

### HTTP Request

- **Method**: POST
- **URL**: `http://localhost:3000/v1/user_subscription/create`
- **Body Format**: JSON
- **Authorization Type**: Bearer Token

### Authorization

To authorize the request, include the following Bearer token in the `Authorization` header:

```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Iis5MTk4MTI5NDA3MDYiLCJ1aWQiOiIwXzZpaGFjanJyIn0.Rf1ZUJpJdBBbep4cGCqwBQ2A8IyETp2UTrnecGHdi6I
```

### Request Body

The request body should be in JSON format and must include the following fields:

```json
{
  "subscription_id": "ftx0li8efd",
  "start_date": "27/11/2004",
  "end_date": "27/11/2004"
}
```

### Example Request

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

The endpoint will respond with a JSON object indicating the success or failure of the request.

Please replace the provided Bearer token and JSON body with appropriate values as per your context.