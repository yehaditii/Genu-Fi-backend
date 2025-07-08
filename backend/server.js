const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const mintRoute = require("./routes/mintRoute");
app.use("/api", mintRoute); // ✅ This is correct

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
