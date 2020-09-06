const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "SOME RANDOM TEXT THIS TIME", port: process.env.PORT_APP });
});

const PORT = process.env.PORT_APP || 80;

app.listen(PORT, () => console.log(`SERVER IS RUNNING AT PORT ${PORT}`));

process.on("SIGINT", function () {
  process.exit(0);
});
