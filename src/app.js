const express = require("express");
const connectionDB = require("./config/database");
const User = require("./models/user");

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// POST route for user signup
app.post("/signup", async (req, res) => {
    try {
        // Use `req.body` for dynamic user data
        const { firstName, lastName, emailId, password, age, gender } = req.body;

        // Validate incoming data
        if (!firstName || !lastName || !emailId || !password) {
            return res.status(400).json({ message: "All required fields must be provided!" });
        }

        // Check if the email already exists
        const existingUser = await User.findOne({ emailId });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists!" });
        }

        // Create a new user
        const user = new User({
            firstName,
            lastName,
            emailId,
            password,
            age,
            gender,
        });

        // Save user to the database
        await user.save();
        res.status(201).json({ message: "User successfully created!" });
    } catch (error) {
        console.error("Error saving user:", error.message);
        res.status(500).json({ message: "Error saving user: " + error.message });
    }
});

// Connect to the database and start the server
(async () => {
    try {
        await connectionDB();
        console.log("Database connected!");

        app.listen(2020, () => {
            console.log("Server is successfully running on port 2020!");
        });
    } catch (err) {
        console.error("Failed to connect to the database. Server not started.", err.message);
    }
})();

