# API Documentation: Create User Subscription

## Metadata
- **Name**: create
- **Type**: HTTP
- **Sequence**: 1

## HTTP Request: POST

### URL
`http://localhost:3000/v1/user_subscription/create`

### Authorization
This endpoint requires a bearer token for authorization.

- **Token**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Iis5MTk4MTI5NDA3MDYiLCJ1aWQiOiIwXzZpaGFjanJyIn0.Rf1ZUJpJdBBbep4cGCqwBQ2A8IyETp2UTrnecGHdi6I`

### Request Body
The request body must be in JSON format and include the following fields:

```json
{
  "subscription_id": "ftx0li8efd",
  "start_date": "27/11/2004",
  "end_date": "27/11/2004"
}
```

- **subscription_id**: Unique identifier for the subscription (string).
- **start_date**: Start date of the subscription in the format `DD/MM/YYYY` (string).
- **end_date**: End date of the subscription in the format `DD/MM/YYYY` (string).

### Example Curl Request:
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