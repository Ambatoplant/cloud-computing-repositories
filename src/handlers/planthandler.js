// Export the handler function
const db = require("../config/firebaseconfig");

const getAllPlants = async (req, res) => {
  try {
    // Referensi ke koleksi 'plant'
    const plantsSnapshot = await db.collection("plant").get();

    // Jika tidak ada dokumen di koleksi
    if (plantsSnapshot.empty) {
      return res.status(404).send("No plants found");
    }

    // Proses setiap dokumen menjadi array objek
    const plants = [];
    plantsSnapshot.forEach((doc) => {
      plants.push({ id: doc.id, ...doc.data() }); // Tambahkan ID dokumen jika perlu
    });

    // Kembalikan array dokumen
    return res.status(200).json(plants);
  } catch (error) {
    console.error("Error fetching plants data:", error.message);
    return res.status(500).send("Error fetching plants data");
  }
};

module.exports = { getAllPlants };

