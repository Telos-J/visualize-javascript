import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    background-image: url("../img/brick.png");
    background-size: 100px;
`

const CinemaImage = styled.img`
    width: 50%;
    top: 2rem;
`

const Movie = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const MovieFrame = styled.img`
    width: 30%;
    transform: translateY(2%) scale(1.06);
`

const MoviePoster = styled.img`
    width: 21%;
`

function Arrays() {
    return (
    <Container>
        <CinemaImage id="cinema-image" src="../img/cinema.png" alt="cinema"/>
        <Movie>
            <MovieFrame className="movie-frame" src="../img/movieFrame.png" alt="movie-frame"/>
            <MoviePoster className="movie-poster" src="https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" alt="movie-poster"/>
        </Movie>
    </Container>
    )
}

export default Arrays