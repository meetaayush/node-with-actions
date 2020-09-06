const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ msg: "Testing if this works" });
});

const PORT = process.env.PORT_APP;

app.listen(PORT, () => console.log(`SERVER IS RUNNING AT PORT ${PORT}`));

process.on("SIGINT", function () {
  process.exit(0);
});
