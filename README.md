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
      "name": "Jagung",
      "benefits": [
          "Jagung mengandung karbohidrat tinggi yang memberikan energi yang diperlukan tubuh untuk beraktivitas sehari-hari.",
          "Jagung kaya akan serat, yang penting untuk pencernaan yang sehat, mencegah sembelit, menjaga saluran pencernaan, serta menurunkan risiko penyakit jantung.",
          "Jagung mengandung beta-karoten, yang diubah menjadi vitamin A dalam tubuh, yang sangat penting untuk menjaga kesehatan mata dan mencegah gangguan penglihatan.",
          "Kandungan vitamin B kompleks dan antioksidan seperti vitamin C dalam jagung dapat membantu menjaga kesehatan jantung, sementara serat larut dalam jagung dapat menurunkan kadar kolesterol jahat (LDL) dalam darah.",
          "Jagung mengandung vitamin C yang dapat membantu meningkatkan sistem kekebalan tubuh dan melawan infeksi.",
          "Jagung memiliki indeks glikemik yang rendah hingga sedang, yang dapat membantu mengatur kadar gula darah, menjadikannya pilihan yang baik bagi penderita diabetes.",
          "Jagung mengandung senyawa antioksidan seperti lutein dan zeaxanthin, yang berfungsi melindungi tubuh dari kerusakan akibat radikal bebas.",
          "Kandungan vitamin C dan antioksidan dalam jagung juga bermanfaat untuk kesehatan kulit, membantu menjaga elastisitas kulit, dan mencegah kerusakan akibat paparan sinar matahari.",
          "Jagung mengandung tiamin (vitamin B1) yang penting untuk fungsi otak yang baik, dan kekurangan tiamin dapat menyebabkan masalah neurologis."
      ],
      "care_tips": [
          "Pilih benih jagung berkualitas dari sumber yang terpercaya dan bebas dari penyakit. Pilih jenis jagung yang sesuai dengan tujuan (jagung manis, jagung pipilan, atau jagung hibrida). Benih jagung unggul akan memberikan hasil yang optimal.",
          "Persiapkan media tanam dengan mencampurkan tanah lapisan atas dengan pupuk kandang atau kompos dengan perbandingan 1:1. Pastikan tanah memiliki drainase yang baik untuk mencegah genangan air yang dapat menyebabkan pembusukan akar.",
          "Lakukan penanaman pada musim penghujan agar tanaman mendapatkan air yang cukup. Buat lubang tanam dengan kedalaman 3-5 cm dan jarak antar tanaman 25-30 cm, serta jarak antar baris 70-90 cm. Tanam benih dalam lubang tanam dan tutup kembali dengan tanah.",
          "Lakukan penyiraman secara rutin, terutama pada musim kemarau. Jagung membutuhkan kelembapan yang cukup, namun hindari penyiraman berlebihan yang dapat menyebabkan akar tergenang air.",
          "Pemupukan secara berkala menggunakan pupuk yang kaya akan nitrogen, fosfor, dan kalium. Pemupukan tambahan dapat dilakukan setelah tanaman berumur 2-3 minggu untuk mendukung pertumbunhan tanaman.",
          "Lakukan penyiangan secara rutin untuk menghilangkan gulma yang dapat mengganggu pertumbuhan jagung. Gulma harus dibersihkan agar tanaman jagung tidak bersaing dengan mereka dalam hal air dan nutrisi.",
          "Periksa tanaman secara berkala untuk mendeteksi adanya hama atau penyakit. Gunakan insektisida alami atau kimiawi jika diperlukan, dan pastikan tanaman memiliki ruang yang cukup untuk sirkulasi udara yang baik.",
          "Pemanenan jagung dilakukan setelah 3-4 bulan, ketika biji jagung sudah keras dan berwarna kuning. Pemanenan yang tepat waktu akan memastikan hasil yang optimal.",
          "Pengeringan dilakukan dengan menjemur jagung di bawah sinar matahari setelah dipanen. Pastikan jagung benar-benar kering untuk menghindari pembusukan saat penyimpanan.",
          "Penyimpanan jagung yang telah dikeringkan harus dilakukan di tempat yang sejuk dan kering agar tetap terjaga kualitasnya."
      ],
      "image_url": "https://example.com/jagung.jpg",
      "created_at": "2024-12-01T10:00:00Z"
    }
  ]
}
```

### 2. Get Plant by ID
- **Method:** `GET`
- **Endpoint:** `/plants/{id}`
- **Description:** Fetch a specific plant by ID.
- **Parameters:**
  - `id` (string, required): The ID of the plant.

#### **Response:**
```json
{
  "success": true,
  "message": "Plant with ID '1' fetched successfully",
  "data": {
    "id": "1",
    "name": "Jagung",
    "benefits": [
        "Jagung mengandung karbohidrat tinggi yang memberikan energi yang diperlukan tubuh untuk beraktivitas sehari-hari.",
        "Jagung kaya akan serat, yang penting untuk pencernaan yang sehat, mencegah sembelit, menjaga saluran pencernaan, serta menurunkan risiko penyakit jantung.",
        "Jagung mengandung beta-karoten, yang diubah menjadi vitamin A dalam tubuh, yang sangat penting untuk menjaga kesehatan mata dan mencegah gangguan penglihatan.",
        "Kandungan vitamin B kompleks dan antioksidan seperti vitamin C dalam jagung dapat membantu menjaga kesehatan jantung, sementara serat larut dalam jagung dapat menurunkan kadar kolesterol jahat (LDL) dalam darah.",
        "Jagung mengandung vitamin C yang dapat membantu meningkatkan sistem kekebalan tubuh dan melawan infeksi.",
        "Jagung memiliki indeks glikemik yang rendah hingga sedang, yang dapat membantu mengatur kadar gula darah, menjadikannya pilihan yang baik bagi penderita diabetes.",
        "Jagung mengandung senyawa antioksidan seperti lutein dan zeaxanthin, yang berfungsi melindungi tubuh dari kerusakan akibat radikal bebas.",
        "Kandungan vitamin C dan antioksidan dalam jagung juga bermanfaat untuk kesehatan kulit, membantu menjaga elastisitas kulit, dan mencegah kerusakan akibat paparan sinar matahari.",
        "Jagung mengandung tiamin (vitamin B1) yang penting untuk fungsi otak yang baik, dan kekurangan tiamin dapat menyebabkan masalah neurologis."
    ],
    "care_tips": [
        "Pilih benih jagung berkualitas dari sumber yang terpercaya dan bebas dari penyakit. Pilih jenis jagung yang sesuai dengan tujuan (jagung manis, jagung pipilan, atau jagung hibrida). Benih jagung unggul akan memberikan hasil yang optimal.",
        "Persiapkan media tanam dengan mencampurkan tanah lapisan atas dengan pupuk kandang atau kompos dengan perbandingan 1:1. Pastikan tanah memiliki drainase yang baik untuk mencegah genangan air yang dapat menyebabkan pembusukan akar.",
        "Lakukan penanaman pada musim penghujan agar tanaman mendapatkan air yang cukup. Buat lubang tanam dengan kedalaman 3-5 cm dan jarak antar tanaman 25-30 cm, serta jarak antar baris 70-90 cm. Tanam benih dalam lubang tanam dan tutup kembali dengan tanah.",
        "Lakukan penyiraman secara rutin, terutama pada musim kemarau. Jagung membutuhkan kelembapan yang cukup, namun hindari penyiraman berlebihan yang dapat menyebabkan akar tergenang air.",
        "Pemupukan secara berkala menggunakan pupuk yang kaya akan nitrogen, fosfor, dan kalium. Pemupukan tambahan dapat dilakukan setelah tanaman berumur 2-3 minggu untuk mendukung pertumbunhan tanaman.",
        "Lakukan penyiangan secara rutin untuk menghilangkan gulma yang dapat mengganggu pertumbuhan jagung. Gulma harus dibersihkan agar tanaman jagung tidak bersaing dengan mereka dalam hal air dan nutrisi.",
        "Periksa tanaman secara berkala untuk mendeteksi adanya hama atau penyakit. Gunakan insektisida alami atau kimiawi jika diperlukan, dan pastikan tanaman memiliki ruang yang cukup untuk sirkulasi udara yang baik.",
        "Pemanenan jagung dilakukan setelah 3-4 bulan, ketika biji jagung sudah keras dan berwarna kuning. Pemanenan yang tepat waktu akan memastikan hasil yang optimal.",
        "Pengeringan dilakukan dengan menjemur jagung di bawah sinar matahari setelah dipanen. Pastikan jagung benar-benar kering untuk menghindari pembusukan saat penyimpanan.",
        "Penyimpanan jagung yang telah dikeringkan harus dilakukan di tempat yang sejuk dan kering agar tetap terjaga kualitasnya."
    ],
    "image_url": "https://example.com/jagung.jpg",
    "created_at": "2024-12-01T10:00:00Z"
  }
}
```

#### **Error Response:**
If the plant ID does not exist:
```json
{
  "success": false,
  "message": "Plant with ID 'invalid-id' not found"
}
```

### 3. Upload Plant
- **Method:** `POST`
- **Endpoint:** `/plants`
- **Description:** Add a new plant to the database.
- **Headers:**
  - `Content-Type: multipart/form-data`
- **Request Body:**
  - `name` (string, required): Name of the plant.
  - `benefit` (string, required): Benefit of the plant.
  - `care_tips` (string, optional): Tips for taking care of the plant.
  - `file` (file, required): Image of the plant.

#### **Response:**
```json
{
  "name": "Aloe Vera",
  "benefit": "Healing properties",
  "care_tips": "Water weekly",
  "imageUrl": "https://storage.googleapis.com/<bucket-name>/aloe-vera.jpg",
  "createdAt": "2024-12-01T10:00:00Z"
}
```

#### **Error Response:**
If file is missing:
```json
{
  "success": false,
  "message": "No file uploaded"
}
```

### Response Codes
- `200 OK`: Request processed successfully.
- `201 Created`: Resource created successfully.
- `400 Bad Request`: Invalid or missing parameters.
- `404 Not Found`: Resource not found.
- `500 Internal Server Error`: Unexpected server error.

## How to Use the API
- **Base URL:** Replace `<your-deployed-url>` with your API's deployed URL.
- Use tools like Postman or curl to interact with the API.
- Ensure required headers and body fields are included for POST requests.

## Notes
- This API does not support DELETE or PUT methods.
- Ensure proper authentication if implemented in the future.
- Images are stored in Google Cloud Storage, and their URLs are publicly accessible. API Documentation

