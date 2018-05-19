import React from 'react'

const Footer = () => (
    <footer className = "App-footer">
        <hr/>
        <div>
            <p>
                Made with
                    &nbsp;
                    <i className= 'fa fa-heart'></i> 
                    &nbsp; 
                from Indonesia. 
                    <br />
                    &nbsp; 
                &copy; Kulina, 2018. All rigths reserved.
            </p>
            <div>
                <span>Follow Kami</span> 
                <a href=''><i className = 'fab fa-facebook-square'></i></a>
                <a href=''><i className = 'fab fa-twitter-square'></i></a>
                <a href=''><i className = 'fab fa-linkedin'></i></a>
                <a href=''><i className= 'fab fa-instagram'></i></a>
                <a href=''><i className = 'fab fa-line'></i></a>
            </div>
        </div>
    </footer>
)

export default Footer;