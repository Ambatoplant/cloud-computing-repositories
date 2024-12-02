# API Documentation

## Base URL
`https://<your-deployed-url>/api`

---

## Endpoints

### 1. Get All Plants
- **Method:** `GET`
- **Endpoint:** `/plants`
- **Description:** Fetch all plant data.
  
#### **Response:**
```json
{
  "success": true,
  "message": "Plants fetched successfully",
  "data": [
    {
      "id": "1",
      "name": "Aloe Vera",
      "benefit": "Healing properties",
      "care_tips": "Water weekly",
      "imageUrl": "https://example.com/aloe-vera.jpg",
      "createdAt": "2024-12-01T10:00:00Z"
    }
  ]
}
2. Get Plant by ID
Method: GET
Endpoint: /plants/{id}
Description: Fetch a specific plant by ID.
Parameters:
id (string, required): The ID of the plant.
Response:
json
Copy code
{
  "success": true,
  "message": "Plant with ID '1' fetched successfully",
  "data": {
    "id": "1",
    "name": "Aloe Vera",
    "benefit": "Healing properties",
    "care_tips": "Water weekly",
    "imageUrl": "https://example.com/aloe-vera.jpg",
    "createdAt": "2024-12-01T10:00:00Z"
  }
}
Error Response:
If the plant ID does not exist:
json
Copy code
{
  "success": false,
  "message": "Plant with ID 'invalid-id' not found"
}
3. Upload Plant
Method: POST
Endpoint: /plants
Description: Add a new plant to the database.
Headers:
Content-Type: multipart/form-data
Request Body:
name (string, required): Name of the plant.
benefit (string, required): Benefit of the plant.
care_tips (string, optional): Tips for taking care of the plant.
file (file, required): Image of the plant.
Response:
json
Copy code
{
  "name": "Aloe Vera",
  "benefit": "Healing properties",
  "care_tips": "Water weekly",
  "imageUrl": "https://storage.googleapis.com/<bucket-name>/aloe-vera.jpg",
  "createdAt": "2024-12-01T10:00:00Z"
}
Error Response:
If file is missing:
json
Copy code
{
  "success": false,
  "message": "No file uploaded"
}
Response Codes
200 OK: Request processed successfully.
201 Created: Resource created successfully.
400 Bad Request: Invalid or missing parameters.
404 Not Found: Resource not found.
500 Internal Server Error: Unexpected server error.
How to Use the API
Base URL: Replace <your-deployed-url> with your API's deployed URL.
Use tools like Postman or curl to interact with the API.
Ensure required headers and body fields are included for POST requests.
Notes
This API does not support DELETE or PUT methods.
Ensure proper authentication if implemented in the future.
Images are stored in Google Cloud Storage, and their URLs are publicly accessible.
