import React from 'react';

const Job = props => (
  <div className="Job">
    <div>
      <p className="title">
        {props.job.title}
      </p>
      <p>
        {` ${props.job.type} `}
        &bull;
        {` ${props.job.status} `}
        &bull;
        {` ${props.job.location} `}
      </p>
    </div>
    <button>
      Apply
    </button>

  </div>
);
export default Job;
