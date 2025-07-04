require("dotenv").config();
const express = require("express");
const mintRoute = require("./routes/mintRoute");

const app = express();
app.use(express.json());
app.use("/api/mint", mintRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
