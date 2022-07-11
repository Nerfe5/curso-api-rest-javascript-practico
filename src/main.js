async function getTrendingMoviesPreview(){
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY);

    const data = await res.json();

    const movies = data.results;
    movies.forEach(movie => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const moviePoster = document.createElement('img');
        moviePoster.classList.add('movie-poster');
        moviePoster.setAttribute('alt', movie.title);
        moviePoster.setAttribute('src', 'https://image.tmdb.org/t/p/w500/' + movie.poster_path);

    }
    );
}

getTrendingMoviesPreview();