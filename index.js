let express = require("express")
let app =express()
let port = 5000
require("./src/connection_And_schemas/config")
let ContactRoutes= require("./src/Routes/UserRoute")
app.use("/v1/contacts", ContactRoutes)
app.listen(port,()=>{console.log(`app listening at ${port}`)})