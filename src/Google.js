import React from 'react'
import googlogo from './googlogo.webp'
import  './Google.css'
function Google() {
  return (
    <div className='google'> 
        <div>
            <nav className='nav'>
                <ul className='gi'>
                    <li className='gim'>
                        <a href='www.gmail.com'>Gmail</a></li>
                    <li className='fr'>
                        <a href='www.itf.com'>Images</a></li>
                    <button id='but'>M</button>
                </ul>
            </nav>
            
        </div> 
        
        <div className='goo'>
            <img className='gg' src={googlogo} alt='google img' /><br/>
            <input className='inp' type="text"/><br/>
           <button className='good'> Google Search</button>&nbsp; <button className='good'>I'm Feeling Lucky</button>
       
        
            <p className='writ'>Google offered in:<span> Hausa Igbo Ijaw Yoruba Nigerian Pidgin</span></p>
        </div>
        <footer>
            <p className='nig'>Nigeria</p> <br/> <hr/>
            <div className='foto'>
                <div className='list'>
                    <ul>
                        <li>About</li>
                        <li>Advertising</li>
                        <li>Business</li>
                        <li>HowSearchWorlds</li>
                    </ul>
                </div>
                <div>
                    Carbon Neutral Since 2012
                </div>
                <div>
                    <p> &copy; Copyright Martins Daubry</p>
                </div>
                <div className='dep'>
                    <ul>
                        <li>Privacy</li>
                        <li>Terms</li>
                        <li>Settings</li>
                    </ul>
                </div>
            </div>

        </footer>
    </div>
    
  )
}

export default Google