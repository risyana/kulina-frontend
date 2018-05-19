import React from 'react'
import logo from '../../../images/kulina-logo-white.svg'

const Navigation = () => (
    <nav>
        <img src = {logo} />
        <ul>
            <li>
                <a href=''> About Us</a>
            </li>
            <li>
                <a href='' className = 'active'> Career</a>
            </li>
            <li>
                <a href=''> Internship</a>
            </li>
            
        </ul>
    </nav>
)

export default Navigation
