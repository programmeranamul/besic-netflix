import axios from '../Row/axios'
import React, { useEffect, useState } from 'react';
import requests from '../../requiest';
import './Banner.css'

const Banner = () => {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
        }
        fetchData()

    }, [])

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

    return (
        <header className="banner" style={{ background: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})` }}>
            <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className="bannner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>
            <h2 className="banner_description">
                {truncate(movie?.overview, 150)}
            </h2>
            <div className="banner__footer">
            </div>
        </header>

    );
};

export default Banner;