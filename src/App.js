import React, { Component } from 'react'
import './style/style.css'
import Header from './components/Header/Header'
import Article from './components/Article/Article'
import Job from './components/Job/Job'

class App extends Component {

  state = {
    jobs: [
      {
        "title": "Frontend Developer",
        "type": "Engineer",
        "status": "Fulltime",
        "location": "Bandung"
      },
      {
        "title": "Mobile Developer",
        "type": "Engineer",
        "status": "Fulltime",
        "location": "Jakarta"
      },
      {
        "title": "Mobile Developer",
        "type": "Engineer",
        "status": "Fulltime",
        "location": "Jakarta"
      },
      {
        "title": "Mobile Developer",
        "type": "Engineer",
        "status": "Fulltime",
        "location": "Jakarta"
      },
      {
        "title": "Mobile Developer",
        "type": "Engineer",
        "status": "Fulltime",
        "location": "Jakarta"
      },
      {
        "title": "Mobile Developer",
        "type": "Engineer",
        "status": "Fulltime",
        "location": "Jakarta"
      },
    ]
  }

  render() {

    let jobs = this.state.jobs.map((job) => (
      <Job job={job} />
    ));

    return (
      <div className="App-container">
        <header className="App-header">
          <Header/>
        </header>

        <Article title="What We Do" bgcolor="white">
          <p>
            Lorem ipsum dolor sit amet, aliquip omnesque senserit mel an, eum nulla persecuti et.aliquip omnesque senserit mel an, eum nulla persecuti et.aliquip omnesque senserit mel an, eum nulla persecuti et. Deseruisse conclusionemque ex vel, vim brute ornatus ea. Pri percipitur deterruisset cu. Est eu ferri detraxit. Scripta intellegat his id, ut torquatos incorrupte duo, sonet definitionem mei an.
          </p>
          <p>
            Lorem ipsum dolor sit amet, aliquip omnesque senserit mel an, eum nulla persecuti et. Deseruisse conclusionemque ex vel, vim brute ornatus ea. Pri percipitur deterruisset cu. Est eu ferri detraxit. Scripta intellegat his id, ut torquatos incorrupte duo, sonet definitionem mei an.
          </p>
          <p>
            Lorem ipsum dolor sit amet, aliquip omnesque senserit mel an, eum nulla persecuti et. Deseruisse conclusionemque ex vel, vim brute ornatus ea. Pri percipitur deterruisset cu. Est eu ferri detraxit. Scripta intellegat his id, ut torquatos incorrupte duo, sonet definitionem mei an.
          </p>
        </Article>
      
        <Article title="Explore Opportunities" bgcolor="#eee">
          {jobs}
        </Article>

        <footer>

        </footer>
      
      </div>
    );
  }
}

export default App;
