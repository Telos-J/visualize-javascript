import styled from "styled-components"
import { useState, useEffect } from "react"
import {SEARCH_BASE_URL, IMAGE_BASE_URL, POSTER_SIZE} from '../config'
import {variableDeclarations} from "../js/parse"

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

async function outputHandler(setSource) {
        console.log(variableDeclarations)
        const searchTerm = variableDeclarations.movies.value[0]
        const endpoint = `${SEARCH_BASE_URL}${searchTerm}`
        const result = await (await fetch(endpoint)).json()
        const posterPath = result.results[0].poster_path
        const src = `${IMAGE_BASE_URL}${POSTER_SIZE}${posterPath}`
        setSource(src)
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