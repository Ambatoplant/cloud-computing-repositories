const express = require("express");
const { getAllPlants, getPlantById } = require("../handlers/planthandler"); // Pastikan path benar

const router = express.Router();

// Rute untuk mendapatkan semua dokumen dalam koleksi 'plant'
router.get("/plant", getAllPlants);

// Rute untuk mendapatkan dokumen berdasarkan ID
router.get("/plant/:id", getPlantById);

module.exports = router;


