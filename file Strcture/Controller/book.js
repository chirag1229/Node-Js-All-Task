const {Book}=require('../modules/book')

function getApi(req, res) {
    res.json({
        msg:"testing data"
    })

}

module.exports={getApi}