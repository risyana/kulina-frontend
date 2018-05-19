import React, {Fragment} from 'react'
import '../../style/style.css'
import Navigation from './Navigation/Navigation'

const Header = () => (
    <Fragment>
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
    </Fragment>
)

export default Header