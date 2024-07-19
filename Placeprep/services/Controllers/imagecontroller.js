const multer = require("multer");
const path = require('path');
const app = require('../app')

storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "images"))
    },
    filename: (req, file, cb) => {
        cb(null, file.filename + Date.now() + file.originalname)
    }
})


app.post("/upload", upload.single("photo"), (req, res) => {
    res.send("Uploaded");
})
const upload = multer({storage: storage});

modules.exports = upload;