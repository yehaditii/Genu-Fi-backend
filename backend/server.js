const express = require("express");
const cors = require("cors");
require("dotenv").config();

const mintRoute = require("./routes/mintRoute");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/mint", mintRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server started on http://localhost:${PORT}`);
});
