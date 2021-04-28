import React, { useEffect, useState } from 'react';
import axios from './axios'
import './../Row.css'
import YouTube from 'react-youtube';
const movieTrailer = require('movie-trailer')


const base_url = 'https://image.tmdb.org/t/p/original'

const Row = ({ title, fetchURL, isLargeRow }) => {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchURL])

    const handelClick = (movie) => {
        console.log(movie)
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.name || '')
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get('v'))

                })
                .catch(err => console.log(err))
        }
    }

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    console.log(trailerUrl)

    return (
        <div>
            <h3 className="movie__title">{title}</h3>
            <div className="posters">
                {
                    movies.map(movie => <img
                        key={movie.id}
                        onClick={() => handelClick(movie)}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path || movie.poster_path}`}
                        alt={movie.original_name}
                        className={`poster ${isLargeRow && "poster_row_bigger"}`}

                    />)
                }
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    );
};

export default Row;