import styled from "styled-components"
import { useState, useEffect } from "react"
import OutputSection from "./OutputSection"

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    background-image: url("../img/brick.png");
    background-size: 100px;
`

const CinemaImage = styled.img`
    position: absolute;
    width: 50%;
    top: 2rem;
`

const Movie = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const MovieFrame = styled.img`
    position: absolute;
    width: 30%;
    transform: translateY(2%) scale(1.06);
`

const MoviePoster = styled.img`
    position: absolute;
    width: 21%;
`

function outputHandler(setSource) {
        // const output = document.querySelector('#output').contentWindow.document
        // const image = new Image()
        // const searchTerm = 'spiderman homecoming'
        // const endpoint = `${SEARCH_BASE_URL}${searchTerm}`
        // const result = await (await fetch(endpoint)).json()
        // const posterPath = result.results[0].poster_path
        // console.log(result.results[0].poster_path)
        // image.src = `${IMAGE_BASE_URL}${POSTER_SIZE}${posterPath}`
        // const container = output.querySelector('#container')
        // container.appendChild(image)
        setSource("https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg")
}

function Arrays({setOutputHandler}) {
    const [source, setSource] = useState('')

    useEffect(() => {
        setOutputHandler(prev => () => {
            outputHandler(setSource)
        })
    }, [])

    return (
    <Container>
        <CinemaImage id="cinema-image" src="../img/cinema.png" alt="cinema"/>
    { source.length > 0 ? (
        <Movie>
            <MovieFrame className="movie-frame" src="../img/movieFrame.png" alt="movie-frame"/>
            <MoviePoster className="movie-poster" src={source} alt="movie-poster"/>
        </Movie>
        ) : null }       
    </Container>
    )
}

export default Arrays