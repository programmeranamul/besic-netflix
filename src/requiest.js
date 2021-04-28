const API_KEY = 'a43594e27080bd4a508140ffafb23dc6'


const requests = {
    fetchTranding:`/trending/all/day?api_key=${API_KEY}`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetcTopRated:`/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    actionMovie:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    comedyMovie:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    horor:`/discover/movie?api_key=${API_KEY}&with_genres=27`,

}

export default requests