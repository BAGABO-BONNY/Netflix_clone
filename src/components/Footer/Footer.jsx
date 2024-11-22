import React from 'react'
import './Footer.css'
import 'boxicons'
import youtube from '../../assets/youtube.png'
import facebook from '../../assets/facebook.png'
import insta from '../../assets/instagram.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer">
            <div className="footer-icons">
               <img src={facebook} alt="" />
               <img src={youtube} alt="" />
               <img src={insta} alt="" />
            </div>
            <ul>
                <li>Audio Description</li>
                <li>Help center</li>
                <li>Gift Cards</li>
                <li>Media Center</li>
                <li>Investor Relations</li>
                <li>Jobs</li>
                <li>Terms of Use</li>
                <li>Privacy</li>
                <li>Lega Notices</li>
                <li>Cookie Preferences</li>
                <li>Corporate Info</li>
                <li>Contact Us</li>
            </ul>
            <p className="copyright-text">&copy; 1997-2024 Nutflix, Inc.</p>
        </div>
    </div>
  )
}

export default Footer