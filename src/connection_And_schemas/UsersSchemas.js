let mongoose = require("mongoose")
let ContactSchemas = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true, unique: true }
})
module.exports=mongoose.model("contacts", ContactSchemas)