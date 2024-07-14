import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { createImageUrl } from '../services/movieService';
import endpoints from '../services/movieService';

const Hero = () => {

const [movie, setMovie] = useState({})

useEffect(() => {
      axios.get(endpoints.popular).then((response) => {
   // axios.get('https://api.themoviedb.org/3/movie/popular?api_key=42d64fa5000c621b225c1ab5b1848feb').then((response) => {
        const movies = response.data.results;
        const randomMovie = movies[Math.floor(Math.random() *movies.length )];
        setMovie(randomMovie);
        console.log(randomMovie)
    });
},[]);

const truncate = (str,length) => {
    if(!str) return "" ;

    return str.length > length ? str.slice(0,length)+"...":str;
}

if (!movie)
 return (
<>
<p>fetching movie...</p>
</>
);
 const{title,backdrop_path,release_date,overview} = movie ;
  return (
    <div className='w-full h-[550px] lg:h-[850px] '> 
    <div className='w-full h-screen'>
        <div className='absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-r from-black '>
            <img 
            className=' object-cover h-full w-full object-top '
            //src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            src={createImageUrl(backdrop_path,"original")}
            alt={title} />
        </div>
        <div className='absolute w-full top-[10%] lg:top-[25%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-6xl font-bold'>{title}</h1>
            <div className='mt-8 mb-8'>
                <button className='capitalize border border-green-600 bg-slate-600 py-2 px-5 ml-4'>play</button>
                <button className='capitalize border border-yellow-800 py-2 px-5 ml-4 bg-black'>watch later</button>
            </div>
            <p className='text-red-500 text-sm'>{release_date}</p>
            <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncate(overview,150)}</p>
        </div>
    </div>
    </div>
  )
}

export default Hero;



