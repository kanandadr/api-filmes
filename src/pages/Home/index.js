import { Container, MovieList, Movie } from "./styles";


function Home() {

    const movies = [
        {
            Id:1,
            titile: 'Spaider Man',
            Image_url: "https://tse4.mm.bing.net/th?id=OIP.M73I1Mw0rSxA7f9PCdGJpAHaLH&pid=Api&P=0&h=180"

        },
        {
            id:2,
            titile: 'Spaider Man',
            Image_url: "https://tse4.mm.bing.net/th?id=OIP.M73I1Mw0rSxA7f9PCdGJpAHaLH&pid=Api&P=0&h=180"
        

        },
        {
            id:3,
            titile: 'Spaider Man',
            Image_url: "https://tse4.mm.bing.net/th?id=OIP.M73I1Mw0rSxA7f9PCdGJpAHaLH&pid=Api&P=0&h=180"
    

        },
        {
            Id:1,
            titile: 'Spaider Man',
            Image_url: "https://tse4.mm.bing.net/th?id=OIP.M73I1Mw0rSxA7f9PCdGJpAHaLH&pid=Api&P=0&h=180"

        },
        {
            id:2,
            titile: 'Spaider Man',
            Image_url: "https://tse4.mm.bing.net/th?id=OIP.M73I1Mw0rSxA7f9PCdGJpAHaLH&pid=Api&P=0&h=180"
        

        },
        {
            id:3,
            titile: 'Spaider Man',
            Image_url: "https://tse4.mm.bing.net/th?id=OIP.M73I1Mw0rSxA7f9PCdGJpAHaLH&pid=Api&P=0&h=180"
    

        }
    ]

    return (

        <Container>
            <h1>Movies</h1>
            <MovieList>

                {movies.map(movie => {
                    return (
                        <Movie key ={movie.id}>
                            <a href="https://google.com.br"><img src={movie.Image_url} alt="movie.title" /></a>
                            <span>{movie.titile}</span>

                        </Movie>

                    )
                })}

            </MovieList>

        </Container>
    )

}
export default Home;