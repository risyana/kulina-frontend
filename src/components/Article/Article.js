import React, { Fragment } from 'react'

const Article = (props) => (
    <article className="App-article" style={{backgroundColor : props.bgcolor}} >
        <div className='title'>
            <h2>{props.title}</h2>
        </div>
        <div className='content'>
            {props.children}
        </div>
    </article>
)

export default Article
