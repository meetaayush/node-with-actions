const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ msg: "IT WORKS" });
});

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => console.log(`SERVER IS RUNNING AT PORT ${PORT}`));
