const admin = require("firebase-admin");
const serviceAccount = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Tes koneksi ke Firestore
db.collection("test").doc("connectionTest").set({ connected: true })
  .then(() => {
    console.log("Firebase connection successful");
  })
  .catch((error) => {
    console.error("Error connecting to Firebase:", error.message);
  });

module.exports = db;
