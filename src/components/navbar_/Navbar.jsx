import React from 'react'
import Logo from '../../Assets/Logo.svg'
import './navbar.css'
import { navLink } from '../root/Data'

const Navbar = () => {
  return (
    <div className='navbar'>
        <nav className=' flex'>
            <img src={Logo} alt="" />
            <ul>
                {navLink.map((link, index) => (
                    <li key={index}><a href={link.path}>{link.name}</a></li>
                ))}
                <li><i className='bx bx-cart'></i></li>
                <li><button className="btn padding10">Booking Now</button></li>
                <li><i className='bx bx-bars'></i></li>

            </ul>
        </nav>
    </div>
  )
}

export default Navbar