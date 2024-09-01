# API Documentation: Create User Subscription

## API Overview

- **Name**: `create`
- **Type**: `http`
- **Sequence**: `1`

## HTTP Request

- **Method**: `POST`
- **URL**: `http://localhost:3000/v1/user_subscription/create`
- **Body Type**: `json`
- **Authentication**: `Bearer Token`

## Authentication

To authenticate, include the following Bearer token in your request headers:

```plaintext
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Iis5MTk4MTI5NDA3MDYiLCJ1aWQiOiIwXzZpaGFjanJyIn0.Rf1ZUJpJdBBbep4cGCqwBQ2A8IyETp2UTrnecGHdi6I
```

## Request Body

The request body must be in JSON format with the following structure:

```json
{
  "subscription_id": "ftx0li8efd",
  "start_date": "27/11/2004",
  "end_date": "27/11/2004"
}
```

- **subscription_id**: *(string)* The unique identifier for the subscription.
- **start_date**: *(string)* The start date of the subscription in `DD/MM/YYYY` format.
- **end_date**: *(string)* The end date of the subscription in `DD/MM/YYYY` format.

## Example Request

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

## Response

The response will contain the details of the created user subscription. Ensure to handle both successful and error responses appropriately.