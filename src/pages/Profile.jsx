import React, { useEffect, useState } from 'react';
import {MdChevronLeft,MdChevronRight} from "react-icons/md";
import {AiOutlineClose} from "react-icons/ai";
import {UserAuth} from "../context/AuthContext";
import { db } from '../services/firebase';
import {createImageUrl} from "../services/movieService";
import { arrayRemove,doc, onSnapshot,updateDoc } from 'firebase/firestore';

const Profile = () => {

  const[movies,setMovies] = useState([]);
  const {user} = UserAuth();

  useEffect(()=>{
    if(user){
      onSnapshot(doc(db,"users",`${user.email}`),(doc)=>{
         if (doc.data()) setMovies(doc.data().favShows)
      })
    }
  },[user?.email]);

  //console.log(movies)

  const slide = (offset) => {
    const slider = document.getElementById('slider')
    slider.scrollLeft=slider.scrollLeft+offset
  }

const handleRemoveShow = async (movie) =>{
      const userDoc =doc(db,'users',user.email) 

      await updateDoc(userDoc,{
        favShows:arrayRemove(movie),
      })
}


  if (!user) {
    return(
      <>
      <p>fetching shows</p>
      
      </>
    )
  }

  return (
    <div>
      <div className=''>
        <img className='bloc w-full  h-[500px] object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='//' />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[500px]' />
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold my-2'>My Fav Shows</h1>
          <p className='font-light text-red-500 text-lg'>{user.email}</p>
        </div>
      </div>
      {/* movie row */}

      <h2 className='font-extrabold md:text-xl p-4 capitalize'>Fav Shows</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft onClick={()=> slide(-500)} className='bg-red-500 rounded-full absolute left-2 opacity-80 text-black z-10 hidden group-hover:block cursor-pointer'/>
        <div 
        id={`slider`} 
        className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
           

           {movies.map((movie)=>(


           <div key={movie.id} className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2' >
           <img src= {createImageUrl(movie.backdrop_path ?? movie.poster_path,"w500")} alt={movie.title} />

          <div className='absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100'>
          <p className='whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-bold'>{movie.title}</p>
           <p>
            <AiOutlineClose size={30} onClick={()=>handleRemoveShow(movie)} className='absolute top-2 right-2'/>
           </p>
         </div>

</div>




           ))}
      

            
        </div>
        <MdChevronRight onClick={()=> slide(500)} className='bg-red-500 rounded-full absolute right-2 opacity-80 text-black z-10 hidden group-hover:block cursor-pointer' />
        
      </div>
      
    </div>
  )
}

export default Profile
