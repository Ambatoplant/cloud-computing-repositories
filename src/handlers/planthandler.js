const db = require("../config/firebaseconfig");

// Handler untuk mendapatkan semua dokumen dalam koleksi 'plant'
const getAllPlants = async (req, res) => {
  try {
    const plantsSnapshot = await db.collection("plant").get();

    if (plantsSnapshot.empty) {
      return res.status(404).send("No plants found");
    }

    const plants = [];
    plantsSnapshot.forEach((doc) => {
      plants.push({ id: doc.id, ...doc.data() });
    });

    return res.status(200).json(plants);
  } catch (error) {
    console.error("Error fetching plants data:", error.message);
    return res.status(500).send("Error fetching plants data");
  }
};

// Handler untuk mendapatkan dokumen dalam koleksi 'plant' berdasarkan ID
const getPlantById = async (req, res) => {
  try {
    const { id } = req.params; // Ambil parameter ID dari URL
    const plantRef = db.collection("plant").doc(id); // Referensi ke dokumen berdasarkan ID
    const plantDoc = await plantRef.get();

    if (!plantDoc.exists) {
      return res.status(404).send(`Plant with ID '${id}' not found`);
    }

    return res.status(200).json({ id: plantDoc.id, ...plantDoc.data() });
  } catch (error) {
    console.error("Error fetching plant by ID:", error.message);
    return res.status(500).send("Error fetching plant by ID");
  }
};

// Ekspor kedua fungsi
module.exports = { getAllPlants, getPlantById };
