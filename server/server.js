const express = require("express");

const app = express()
const PORT = 3000
const staticFileServer = express.static("public")
app.use("/", staticFileServer)

app.listen(PORT, () => {
  console.log("Server started at port "+PORT)
})
