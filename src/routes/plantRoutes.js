const express = require("express");
const { getAllPlants } = require("../handlers/planthandler");

const router = express.Router();

// Rute GET untuk mendapatkan semua data di koleksi 'plant'
router.get("/plant", getAllPlants);

module.exports = router;

