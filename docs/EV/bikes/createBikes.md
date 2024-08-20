# 1. Create Bikes

## Description
The Create Bikes API is used to add one or more bikes to the system. Each bike includes details such as frame number, name, associated station, top speed, range, and estimated time to reach the station.

### Endpoint

- **URL:** `{{BASE_URL}}/v1/bikes/create`
- **Method:** `POST`
- **Authentication:** None required

### Request Headers

- **X-Karma-Admin-Auth:** `CoffeeCodesMelloBxAparnaEewqjbdkwqbkdjoehui3r7328grehjvdjvchjiuiudhsjkhkjsadab`

### Request Body

The body of the request should be sent in JSON format and contains an array of bike objects.

#### JSON Parameters:

Each bike object should contain the following fields:

| Parameter          | Type   | Description                                                | Required |
|--------------------|--------|------------------------------------------------------------|----------|
| frame_number       | string | The unique frame number of the bike. Example: `"FR123456789"` | Yes      |
| name               | string | The name or model of the bike. Example: `"Speedster X1"`   | Yes      |
| station_id         | string | The ID of the station where the bike is located. Example: `"1ub1d98p_5"` | Yes      |
| top_speed          | int    | The top speed of the bike in km/h. Example: `45`           | Yes      |
| range              | int    | The range of the bike in kilometers. Example: `100`        | Yes      |
| time_to_station    | int    | The estimated time in minutes to reach the station. Example: `5` | Yes      |

Example JSON body:

```json
[
    {
        "frame_number": "FR123456789",
        "name": "Speedster X1",
        "station_id": "1ub1d98p_5",
        "top_speed": 45,
        "range": 100,
        "time_to_station": 5
    }
]
```

### Response

The API will return a response based on the success or failure of the bike creation request. The response format and content will depend on the specific implementation.

### Example Request

```bash
curl -X POST "{{BASE_URL}}/v1/bikes/create" \
-H "Content-Type: application/json" \
-H "X-Karma-Admin-Auth: CoffeeCodesMelloBxAparnaEewqjbdkwqbkdjoehui3r7328grehjvdjvchjiuiudhsjkhkjsadab" \
-d '[
    {
        "frame_number": "FR123456789",
        "name": "Speedster X1",
        "station_id": "1ub1d98p_5",
        "top_speed": 45,
        "range": 100,
        "time_to_station": 5
    }
]'
```

### Example Response

```json
{
  "status": "success",
  "message": "Bikes created successfully.",
  "data": [
    {
      "id": "bike-1-id",
      "frame_number": "FR123456789",
      "name": "Speedster X1"
    }
  ]
}
```

### Notes

- Ensure that the `X-Karma-Admin-Auth` header is included in the request to authorize the admin.
- Replace `{{BASE_URL}}` with the actual base URL of your API server (e.g., `http://localhost:3000`).