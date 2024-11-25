const express = require('express');
const plantRoutes = require('./src/routes/plantRoutes');  // Adjust the path if necessary

const app = express();

app.use('/api', plantRoutes); // API routes will be prefixed with '/api'

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
