const key = import.meta.env.VITE_TMDB_KEY;
const baseUrl = "https://api.themoviedb.org/3/movie";

const endpoints = {
    popular:  `${baseUrl}/popular?api_key=${key}`,
    topRated: `${baseUrl}/top_rated?api_key=${key}`,
    trending: `${baseUrl}/popular?api_key=${key}&language=en-US&page=1`,
   // comedy:`${baseUrl}/search/movie/?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=false`,
    upcoming: `${baseUrl}/upcoming?api_key=${key}`,
    thriller: `${baseUrl}/top_rated?api_key=${key}&language=en-US&query=comedy&page=2&include_adult=false`,
    
    };
    console.log(endpoints.popular)
export function createImageUrl(poster_path, size){
    return `https://image.tmdb.org/t/p/${size}/${poster_path}`;
}
export default endpoints;