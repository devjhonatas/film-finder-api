// src/controllers/movieController.js
const movies = require('../data/movies');

// Lista todos os filmes
const listMovies = (req, res) => {
    res.json(movies);
};

// Recomenda um filme aleatório do gênero escolhido
const recommendMovie = (req, res) => {
    const genre = req.query.genre;
    const filteredMovies = movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());

    if (filteredMovies.length === 0) {
        return res.status(404).json({ message: "Nenhum filme encontrado para este gênero" });
    }

    const randomMovie = filteredMovies[Math.floor(Math.random() * filteredMovies.length)];
    res.json(randomMovie);
};

// Avalia um filme específico
const rateMovie = (req, res) => {
    const { id } = req.params;
    const { rating } = req.body;

    const movie = movies.find(movie => movie.id === parseInt(id));

    if (!movie) {
        return res.status(404).json({ message: "Filme não encontrado" });
    }

    if (rating < 1 || rating > 5) {
        return res.status(400).json({ message: "Avaliação deve ser entre 1 e 5" });
    }

    movie.rating = rating;
    res.json({ message: "Avaliação atualizada com sucesso", movie });
};

module.exports = { listMovies, recommendMovie, rateMovie };