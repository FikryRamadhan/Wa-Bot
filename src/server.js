const express = require("express");
const { getWhatsappClient } = require("./client/WhatsappClient");
const createRoutes = require("./routes/WhatsappRoute");

const app = express();
const port = process.env.PORT || 3500;

// Middleware
app.use(express.json());

// Routes
app.use("/api", createRoutes());

// Initialize WhatsApp client
getWhatsappClient();

// Start server
app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
