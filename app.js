const express = require('express');
const app = express();
const swaggerSetup = require('./swagger');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route
app.get('/', (req, res) => {
    res.send('Aplikasi Ambatoplant berjalan!');
});

// API routes will have prefix '/api'
const plantRoutes = require('./src/routes/plantRoutes'); // Adjust path if needed
app.use('/api', plantRoutes);

// Swagger setup
swaggerSetup(app);

// Port configuration
const PORT = process.env.PORT || 9000;

// Start server
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
    console.log(`Swagger documentation: http://localhost:${PORT}/api-docs`);
});
