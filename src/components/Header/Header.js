import React from 'react'
import '../../style/style.css'
import Navigation from './Navigation/Navigation'

const Header = () => (
    <div className="header-container">
        <Navigation/>
        <h1>
            join an impactful company 
        </h1>
        <div>
            <button>
                <i className = 'fa fa-angle-down' ></i>
            </button>
        </div>
    </div>
)

export default Header