const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "A different text this time", port: process.env.PORT_APP });
});

const PORT = process.env.PORT_APP;

app.listen(PORT, () => console.log(`SERVER IS RUNNING AT PORT ${PORT}`));

process.on("SIGINT", function () {
  process.exit(0);
});
