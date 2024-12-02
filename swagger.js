const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json"); // Import file swagger.json

// Fungsi middleware Swagger
const setupSwagger = (app) => {
  // Menyediakan dokumentasi di endpoint /api-docs
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};

module.exports = setupSwagger;
