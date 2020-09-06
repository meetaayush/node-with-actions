const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ msg: "SOME RANDOM TEXT THIS TIME" });
});

const PORT = process.env.PORT_APP;

app.listen(PORT, () => console.log(`SERVER IS RUNNING AT PORT ${PORT}`));

process.on("SIGINT", function () {
  process.exit(0);
});
