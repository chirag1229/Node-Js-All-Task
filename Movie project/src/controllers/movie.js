
const {movie} = require('../models/movie')

const getmovie = async(req , res )=>{
        try{
            const data =await movie.find()
            res.json({
                data:data
            })
        }catch{
            res.json({
                error:error
            })
        }
}

const createmovie = async(req , res )=>{
    try{
       const req_body = req.body

    //    console.log(req_body)

       const moviename = req_body.moviename
       const castname = req_body.castname
       const year = req_body.year
       const rating = req_body.rating
       await movie.create({
           moviename,
           castname,
           year,
           rating,
       })

       res.json({
           msg:'data create'
       })

    }catch{
        res.json({
            error:error
        })
    }
}

module.exports={getmovie,createmovie}
