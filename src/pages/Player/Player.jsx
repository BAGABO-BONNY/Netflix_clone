import React, { useEffect, useState } from 'react'
import './Player.css'
import back from '../../assets/back-arrow.jpg'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  const {id} = useParams();

  const navigate = useNavigate();

  const [apiPlayData, setApiPlayData] = useState({
    name: '',
    key: '',
    published_at: '',
    typeof: ''
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWUzZjZhNjYyOTFlNzczZDhjMWM0ZDgxMDFiMTZhZSIsIm5iZiI6MTcyMzMyNjcyOS4zNDQ4NjUsInN1YiI6IjY2YjdlMDA4NTNiZTA0ODExNTI2MjNhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CNlA8HgPML9MSX_GvxoLv27v4mF8bA5ceWxO3KIs9lc'
    }
  };
  
useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(response => response.json())
  .then(response => setApiPlayData(response.results[0]))
  .catch(err => console.error(err));
},[])


  return (
    <div className='player'>
      <img src={back} onClick={()=>{
         navigate(-1)
      }} alt="" />
      <iframe src={`https://www.youtube.com/embed/${apiPlayData.key}`}frameborder="0" allowFullScreen title='trailer' width='90%' height='90%'></iframe>
      <div className="player-info">
        <p>{apiPlayData.published_at.slice(0,10)}</p>
        <p>{apiPlayData.name}</p>
        <p>{apiPlayData.type}</p>
      </div>
    </div>
  )
}

export default Player
