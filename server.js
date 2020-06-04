const PORT = 8080

const app = require('express')()
const http = require('http').Server(app)

app.use('/', require("./api.js"))



http.listen(PORT)
console.log("Server started on port " + PORT)