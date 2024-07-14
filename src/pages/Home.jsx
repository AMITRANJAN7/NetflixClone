import React from 'react';
import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';
import endpoints from '../services/movieService';

const Home = () => {
  return (
    <>
      <Hero />
      <MovieRow title= 'upcoming' url= {endpoints.upcoming} />
      <MovieRow title= 'trending' url= {endpoints.trending} />
      <MovieRow title= 'top rated' url= {endpoints.topRated} />
      <MovieRow title= 'popular' url= {endpoints.popular} />
      <MovieRow title= 'thriller' url= {endpoints.thriller} />
     {/* <MovieRow title= 'upcoming' url='https://api.themoviedb.org/3/movie/upcoming?api_key=42d64fa5000c621b225c1ab5b1848feb' />
      <MovieRow title= 'trending' url='https://api.themoviedb.org/3/movie/popular?api_key=42d64fa5000c621b225c1ab5b1848feb&language=en-uspage=2' />
      <MovieRow title= 'top Rated' url='https://api.themoviedb.org/3/movie/top_rated?api_key=42d64fa5000c621b225c1ab5b1848feb' />
      <MovieRow title= 'thriller' url='https://api.themoviedb.org/3/movie/top_rated?api_key=42d64fa5000c621b225c1ab5b1848feb&language=en-US&query=comedy&page=1&include_adult=false' />
      <MovieRow title= 'popular' url='https://api.themoviedb.org/3/movie/popular?api_key=42d64fa5000c621b225c1ab5b1848feb' />*/}
    </>
  );
};

export default Home;

