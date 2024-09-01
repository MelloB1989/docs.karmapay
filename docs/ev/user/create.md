# API Documentation: Create User Subscription

## API Name

`create`

## Type

`http`

## Sequence

`1`

## HTTP Method

`POST`

## URL

`http://localhost:3000/v1/user_subscription/create`

## Request Body

Content-Type: `application/json`

```json
{
  "subscription_id": "ftx0li8efd",
  "start_date": "27/11/2004",
  "end_date": "27/11/2004"
}
```

## Authentication

Type: `Bearer Token`

## Bearer Token

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Iis5MTk4MTI5NDA3MDYiLCJ1aWQiOiIwXzZpaGFjanJyIn0.Rf1ZUJpJdBBbep4cGCqwBQ2A8IyETp2UTrnecGHdi6I
```

## Example cURL Command

```sh
curl -X POST http://localhost:3000/v1/user_subscription/create \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Iis5MTk4MTI5NDA3MDYiLCJ1aWQiOiIwXzZpaGFjanJyIn0.Rf1ZUJpJdBBbep4cGCqwBQ2A8IyETp2UTrnecGHdi6I" \
  -H "Content-Type: application/json" \
  -d '{
        "subscription_id": "ftx0li8efd",
        "start_date": "27/11/2004",
        "end_date": "27/11/2004"
      }'
```

## Response

### Success

- **Status Code**: `200 OK`
- **Body**: JSON object with subscription details

### Error

- **Status Code**: `400 Bad Request`
- **Body**: JSON object with error details

---

### Note

- Ensure that the `start_date` and `end_date` fields are provided in the correct format (`DD/MM/YYYY`).
- The bearer token should be kept confidential and stored securely.