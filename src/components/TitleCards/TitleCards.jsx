import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import data from '../../assets/cards/cards'
import { Link } from 'react-router-dom';


const TitleCards = ({title, category}) =>{

const [apiData , setApiData] = useState([]);

const cardsRef = useRef();
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWUzZjZhNjYyOTFlNzczZDhjMWM0ZDgxMDFiMTZhZSIsIm5iZiI6MTcyMzMyNjcyOS4zNDQ4NjUsInN1YiI6IjY2YjdlMDA4NTNiZTA0ODExNTI2MjNhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CNlA8HgPML9MSX_GvxoLv27v4mF8bA5ceWxO3KIs9lc'
  }
};

const handleWheel = ((e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaX;
})

useEffect(()=> {
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err));
    cardsRef.current.addEventListener('wheel', handleWheel);
},[])

  return (
    <div className='title-cards'>
        <h2>{title?title : "Popular On Nutflix"}</h2>
        <div className='cards-list' ref={cardsRef}>
           {apiData.map((card, index) => {
            return <Link  to={`/player/${card.id}`} className='card' key={index}>
                <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt={card.title} />
                <p>{card.original_title}</p>
                </Link>
           })}
        </div>
    </div>
  )
}

export default TitleCards
