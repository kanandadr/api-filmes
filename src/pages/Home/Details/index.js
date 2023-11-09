import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ApiKey from "../constants/api_key"
import { Container } from "../styles"
import '../styles/style.css'

function Details() {
    const { id } = useParams()
    const [movie, setMovies] = useState([]) 
    const image_path = "https://image.tmdb.org/t/p/w500"
    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&page=1&api_key=${ApiKey}`)
            .then(response => response.json())
            .then(data => {
                const { title, poster_path, overview, release_date } = data
                const movie = {
                    id,
                    title,
                    sinopse: overview,
                    Image: `${image_path}${poster_path}`,
                    releaseDate: release_date
                }
                setMovies(movie)
            
            })



    }, [id])


    return (
        <Container>
            <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}} className="movie">
            <img width="300vh" src={movie.Image} alt="movie.title" /> 
            <div className="details">
            <h1>{movie.title}</h1>
            <span>sinopse: {movie.sinopse}</span>
            <span className="relase-date"> release date:{movie.releaseDate}</span>
            <Link to="/"><button>Go Back</button></Link>

            </div>
            </div>

        </Container>
    )
}

export default Details