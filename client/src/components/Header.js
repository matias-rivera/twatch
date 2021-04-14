import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return ( 
        <nav>
            <Link to='/'>
                <label className='logo'>Home</label>
            </Link>
            <ul>
                <Link to='/'>
                    <li>Streams</li>
                </Link>
            </ul>
        </nav>
     );
}
 
export default Header;