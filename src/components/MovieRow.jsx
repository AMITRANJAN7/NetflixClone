import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MovieItem from './MovieItem';
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'



const MovieRow = ({title,url}) => {
  console.log()
  const rowId = Math.floor(Math.random()*1000)

  const [movies, setMovies]= useState([]);

useEffect(() => {
    axios.get(url).then((response) => setMovies(response.data.results))
},[url]);

//console.log(movies)

const slide = (offset) => {
  const slider = document.getElementById('slider'+rowId)
  slider.scrollLeft=slider.scrollLeft+offset
}



  return (
    <>
      <h2 className='font-extrabold md:text-xl p-4 capitalize'>{title}</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft onClick={()=> slide(-500)} className='bg-red-500 rounded-full absolute left-2 opacity-80 text-black z-10 hidden group-hover:block cursor-pointer'/>
        <div 
        id={`slider`+rowId} 
        className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
           

           {movies.map((movie)=>(<MovieItem key={movie.id} movie={movie} />))}
      

            
        </div>
        <MdChevronRight onClick={()=> slide(500)} className='bg-red-500 rounded-full absolute right-2 opacity-80 text-black z-10 hidden group-hover:block cursor-pointer' />
        
      </div>
    </>
  )
}

export default MovieRow;
