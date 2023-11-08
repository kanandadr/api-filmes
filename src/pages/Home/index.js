import { Container, MovieList, Movie } from "./styles";
import { useState, useEffect } from "react";
import ApiKey from "./constants/api_key";
import { Link } from "react-router-dom";

function Home() {
    const [movies, setMovies] = useState([])
    const fetchMovies = async () => {

        const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${ApiKey}`;
        const options = {
            method: 'GET',
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => setMovies(json.results))
            .catch(err => console.error('error:' + err));

    }
    useEffect(() => {
        fetchMovies()
    }, [])



    return (

        <Container>
            <h1>KFLIX</h1>
            <MovieList>

                {movies.map(movie => {
                    return (
                        <Movie key={movie.id}>

                             <Link to={`/details/${movie.id}`}><img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.backdrop_path}`} alt="movie.title" /></Link>


                            <span>{movie.title}</span>

                        </Movie>

                    )
                })}

            </MovieList>

        </Container>
    )

}
export default Home;