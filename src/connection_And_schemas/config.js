let mongoose=require("mongoose")
let url ="mongodb://localhost:27017/contacts"
mongoose.connect(url)
.then(()=>{
    console.log("Connected to Database")
})
.catch((err)=>{
    console.log(`Error to connectwith database ${err}`)
})