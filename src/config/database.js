const mongoose = require("mongoose");

const connectionDB = async () => {
    try {
await mongoose.connect("mongodb+srv://Manohar:P2M5KOMhmZFEgGM3@maincluster.vmwfc.mongodb.net/devTinder");
        
console.log("Database connection established!");
    } catch (err) {
        console.error("Error connecting to the database:", err);
        throw err; // Re-throw the error for proper handling in `app.js`
    }
};

module.exports = connectionDB;
