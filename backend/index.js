const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/api/projects", (req, res) => {
  res.json([{ id: 1, name: "Project Alpha" }, { id: 2, name: "Project Beta" }]);
});

app.listen(PORT, () => {
  console.log(`Backend is running on port ${PORT}`);
});
