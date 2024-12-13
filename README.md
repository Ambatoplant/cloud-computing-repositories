---

# **AmbatoPlant - Backend API and Machine Learning Integration**

AmbatoPlant adalah aplikasi berbasis android yang memberikan informasi tentang tanaman, manfaatnya, tips perawatan, dan memungkinkan prediksi jenis tanaman melalui model machine learning.

---

## **Tech Stack**
- **Backend Framework**: [Express.js](https://expressjs.com/)
- **Database & Authentication**: [Firebase Admin SDK](https://firebase.google.com/)
- **Storage**: [Google Cloud Storage](https://cloud.google.com/storage)
- **API Documentation**: [Swagger](https://swagger.io/)
- **Runtime**: [Node.js](https://nodejs.org/) (v18.x)

---

## **Environment Setup**

### **Requirements**
- Node.js v18.x or higher
- Google Cloud Project with appropriate permissions
- Firebase Admin SDK service account
- Google Cloud Storage bucket

### **Environment Variables**
Create a `.env` file in the root directory with the following configurations:

```properties
# Server
PORT=9000
NODE_ENV=production

# Firebase
FIREBASE_SERVICE_ACCOUNT_KEY=key.json
FIREBASE_STORAGE_BUCKET=ambatoplant.appspot.com
FIREBASE_PROJECT_ID=ambatoplant

# Google Cloud
GOOGLE_CLOUD_PROJECT=ambatoplant
GOOGLE_APPLICATION_CREDENTIALS=key.json

# API Config
API_VERSION=v1
CORS_ORIGIN=*
```

## **Environment Setup**

### **Requirements**
- Node.js v18.x or higher
- Google Cloud Project with appropriate permissions
- Firebase Admin SDK service account
- Google Cloud Storage bucket

### **Environment Variables**
Create a `.env` file in the root directory with the following configurations:

```properties
# Server
PORT=9000
NODE_ENV=production

# Firebase
FIREBASE_SERVICE_ACCOUNT_KEY=key.json
FIREBASE_STORAGE_BUCKET=ambatoplant.appspot.com
FIREBASE_PROJECT_ID=ambatoplant

# Google Cloud
GOOGLE_CLOUD_PROJECT=ambatoplant
GOOGLE_APPLICATION_CREDENTIALS=key.json

# API Config
API_VERSION=v1
CORS_ORIGIN=*
```

### **Setup Instructions**
1. Clone this repository:
   ```bash
   git clone https://github.com/your-repo/ambatoplant.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ambatoplant
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Add the Firebase service account key (`key.json`) to the project root.
5. Run the development server:
   ```bash
   npm run dev
   ```

---

## **API Documentation**

### **Base URL**



Development:
```
http://localhost:9000/api/v1/
```

### **Endpoints Overview**
#### **1. Get All Plants**
- **Method**: `GET`
- **Endpoint**: `/plants`
- **Description**: Retrieve all plant data.
- **Response**:
  ```json
  {
    "success": true,
    "message": "Plants fetched successfully",
    "data": [ ... ]
  }
  ```

#### **2. Get Plant by ID**
- **Method**: `GET`
- **Endpoint**: `/plants/{id}`
- **Description**: Retrieve a specific plant by ID.
- **Response**:
  ```json
  {
    "success": true,
    "message": "Plant with ID '{id}' fetched successfully",
    "data": { ... }
  }
  ```

#### **3. Upload Plant**
- **Method**: `POST`
- **Endpoint**: `/plants`
- **Description**: Add a new plant to the database.
- **Headers**: `Content-Type: multipart/form-data`
- **Request Body**:
  - `name` (string, required): Name of the plant.
  - `benefits` (string, required): Benefits of the plant.
  - `care_tips` (string, optional): Care tips for the plant.
  - `file` (file, required): Image file of the plant.

- **Response**:
  ```json
  {
    "name": "Aloe Vera",
    "benefits": "Healing properties",
    "care_tips": "Water weekly",
    "imageUrl": "https://storage.googleapis.com/<bucket-name>/aloe-vera.jpg",
    "createdAt": "2024-12-01T10:00:00Z"
  }
  ```





## **Project Roadmap**
1. Implement core backend APIs with Express.js.
2. Integrate Firebase Admin SDK for database and authentication.
3. Add Google Cloud Storage for image management.
4. Document all endpoints with Swagger.


---

## **Contributing**
Contributions are welcome! Please fork the repository and create a pull request for new features or bug fixes.

---

## **License**
This project is licensed under the MIT License. See the `https://github.com/Ambatoplant/cloud-computing-repositories/blob/master/LICENSE` file for details.
```
