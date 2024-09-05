const { Movie } = require('../model/movie')

const getMovieData = async (req, res) => {
    const movie = await Movie.find()
    res.json({ "movie": movie })
}


const MovieData = async (req, res) => {
    try {
        console.log(req.body)
        const { moviename, director, actor, year } = req.body
        await Movie.create({ moviename: moviename, director: director, actor: actor, year: year })

        res.json({ "msg": "Movie Data Created SuccessFully " })
    } catch (error) {
        console.log(error);

        res.json({ "msg": "Movie Data Not Created " })
    }
}

module.exports = { MovieData, getMovieData }