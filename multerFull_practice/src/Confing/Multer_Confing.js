const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/uploads')
    },
    filename: function (req, file, cb) {
        const preFix = Date.now() + '-' + Math.round(Math.random() * 100000)
        cb(null, preFix + '-' + file.originalname)
    }
})

const multerConfing = multer({ storage: storage })

module.exports = { multerConfing }