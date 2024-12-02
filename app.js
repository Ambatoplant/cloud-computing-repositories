const express = require('express');
const plantRoutes = require('./src/routes/plantRoutes'); // Sesuaikan path jika diperlukan
const swaggerSetup = require('./swagger');

const app = express();

// Middleware untuk parsing JSON
app.use(express.json());

// API routes akan memiliki prefix '/api'
app.use('/api', plantRoutes);

// Setup Swagger
swaggerSetup(app);

// Jalankan server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});

