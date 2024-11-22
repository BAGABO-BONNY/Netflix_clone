import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/NotflixLogo (2).png'
import search from '../../assets/searchIcon.png'
import bell from '../../assets/bell.png'
import profile from '../../assets/profile.jpg'
import caret from '../../assets/caret.png'
import { logout } from '../../firebase'

const Navbar = () => {

const navRef = useRef();

useEffect(()=>{
  window.addEventListener('scroll', () =>{
    if(window.scrollY >= 500) {
        navRef.current.classList.add('nav-dark')
    }else {
        navRef.current.classList.remove('nav-dark')
    }
  })
},[])

  return (
    <div ref={navRef} className='navbar'>
        <div className='navbar-left'>
            <img src={logo} width={100} alt="" />
            <ul>
               <li>Home</li>
               <li>TV Shows</li>
               <li>Movies</li>
               <li>New & Popular</li>
               <li>My List</li>
               <li>Browse by Language</li>
            </ul>
        </div>
        <div className='navbar-left'>
            <img src={search} width={20} height={20} alt="" className='icons' />

            <img src={bell} width={40}  alt="" className='icons'/>
            <div className="navbar-profile">
                <img src={profile} width={60} alt="" className='profile' />
                <div className="dropdown">
                    <p onClick={()=>{
                      logout();
                    }}>Sign Out</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar