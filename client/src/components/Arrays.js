import styled from "styled-components"
import { useState, useEffect } from "react"
import {SEARCH_BASE_URL, IMAGE_BASE_URL, POSTER_SIZE, NO_POSTER_URL} from '../config'
import {expressionStatements, variableDeclarations} from "../js/parse"

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
const MovieList = styled.div`
    display: flex;
    width: 100%;
    height: 30%;
    position: relative;
    justify-content: space-evenly;
`


const Movie = styled.div`
    position: relative;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MovieFrame = styled.img`
    position: absolute;
    width: 100%;
    transform: translateY(2%) scale(1.06);
`

const MoviePoster = styled.img`
    position: absolute;
    width: 71%;
`

async function outputHandler(setSources) {
        const newSources = []
        for (const expressionStatement of expressionStatements) {
            if (expressionStatement.property === 'push')
                variableDeclarations.movies.value.push(expressionStatement.value)
            else if (expressionStatement.property === 'pop')
                variableDeclarations.movies.value.pop()
        }
        for (const searchTerm of variableDeclarations.movies.value) {
            const endpoint = `${SEARCH_BASE_URL}${searchTerm}`
            const result = await (await fetch(endpoint)).json()
            const posterPath = result.results[0]?.poster_path
            const src = posterPath ? `${IMAGE_BASE_URL}${POSTER_SIZE}${posterPath}` : NO_POSTER_URL
            newSources.push(src)
        }
        setSources(newSources)
}

function Arrays({setOutputHandler}) {
    const [sources, setSources] = useState([])

    useEffect(() => {
        setOutputHandler(prev => () => {
            outputHandler(setSources)
        })
    }, [])

    return (
    <Container>
        <CinemaImage id="cinema-image" src="../img/cinema.png" alt="cinema"/>
        <MovieList>
        { sources.map(source => (
            <Movie>
                <MovieFrame className="movie-frame" src="../img/movieFrame.png" alt="movie-frame"/>
                <MoviePoster className="movie-poster" src={source} alt="movie-poster"/>
            </Movie>
        ))}
        </MovieList>
    </Container>
    )
}

export default Arrays