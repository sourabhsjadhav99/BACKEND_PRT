let express = require("express")
let Contacts = require("../connection_And_schemas/UsersSchemas")
let router = express.Router()
router.use(express.json())


router.post("/", async (req, res) => {
    try {
        if (req.body.firstName && req.body.lastName && req.body.email && req.body.phone) {
            let data = await Contacts.create(req.body)
            res.status(201).send(data)
        } else {
            if (!req.body.firstName) {
                res.json({
                    "error": "Missing required field(s): firstname"
                })
            }else if(!req.body.lastName){
                res.json({
                    "error": "Missing required field(s): lastname"
                })
            }else if(!req.body.phone){
                res.json({
                    "error": "Missing required field(s): phone"
                })
            }else if(!req.body.email){
                res.json({
                    "error": "Missing required field(s): email"
                })
            }





        }
    } catch (error) {
        res.status(404).json({
            status: "Failed",
            message: error.message
        })
    }
})


router.get("/", async (req, res) => {
    try {
        let data = await Contacts.find()
        res.status(200).send(data)
    } catch (error) {
        res.status(404).json({
            status: "Failed",
            message: error.message
        })
    }
})

router.get("/:_id", async (req, res) => {
    try {
        let tofind = await Contacts.find()
        let findid = tofind.filter((data) => {
            if (data._id == req.params._id) {
                return true
            } else {
                return false
            }
        })

        if (findid.length) {
            let data = await Contacts.find({ _id: req.params._id })
            res.status(200).send(data)

        } else {
            res.status(404).json({
                "error": "There is no contact with that id"
            })
        }

    } catch (error) {
        res.status(404).json({
            status: "Failed",
            message: error.message
        })
    }
})

router.delete("/:_id", async (req, res) => {
    try {
        let tofind = await Contacts.find()
        let findid = tofind.filter((data) => {
            if (data._id == req.params._id) {
                return true
            } else {
                return false
            }
        })
        if (findid.length) {
            let data = await Contacts.findOneAndDelete({ _id: req.params._id })
            res.status(204).send(data)

        } else {
            res.status(404).json({
                "error": "There is no contact with that id"
            })
        }

    } catch (error) {
        res.status(404).json({
            status: "Failed",
            message: error.message
        })
    }
})

router.put("/:_id", async (req, res) => {
    try {
        let tofind = await Contacts.find()
        let findid = tofind.filter((data) => {
            if (data._id == req.params._id) {
                return true
            } else {
                return false
            }
        })
        if (findid.length) {
            let data = await Contacts.updateOne({ _id: req.params._id }, { $set: req.body })
            res.status(204).send(data)
        } else {
            res.status(404).json({
                "error": "There is no contact with that id"
            })
        }

    } catch (error) {
        res.status(404).json({
            status: "Failed",
            message: error.message
        })
    }
})

router.patch("/:_id", async (req, res) => {
    try {
        let tofind = await Contacts.find()
        let findid = tofind.filter((data) => {
            if (data._id == req.params._id) {
                return true
            } else {
                return false
            }
        })
        if (findid.length) {
            let data = await Contacts.findOneAndUpdate({ _id: req.params._id }, { $set: req.body })
            res.status(204).send(data)
        } else {
            res.status(404).json({
                "error": "There is no contact with that id"
            })
        }

    } catch (error) {
        res.status(404).json({
            status: "Failed",
            message: error.message
        })
    }
})


module.exports = router