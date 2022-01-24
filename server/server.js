const express = require("express");

const app = express()
const PORT = 3000
const fileServerMiddleware = express.static("public")
app.use("/", fileServerMiddleware)

app.listen(PORT, () => {
  console.log("Server started at port "+PORT)
})
