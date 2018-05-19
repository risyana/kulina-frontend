import React from 'react'

const Job = (props) => (
    <div className="Job">
        <div>
            <h3>{props.job.title}</h3>  
            <p>{`${props.job.type}  .  ${props.job.status}  .  ${props.job.location}`}</p>          
        </div>
        <button>
            Apply
        </button>
    </div> 
)
export default Job