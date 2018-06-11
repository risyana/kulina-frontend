import React, { Component } from 'react';
import './style/style.css';
import Header from './components/Header/Header';
import Article from './components/Article/Article';
import Job from './components/Job/Job';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      jobs: [
        {
          id: 1,
          title: 'Frontend Developer',
          type: 'Engineer',
          status: 'Fulltime',
          location: 'Bandung',
        },
        {
          id: 2,
          title: 'Mobile Developer',
          type: 'Engineer',
          status: 'Fulltime',
          location: 'Jakarta',
        },
        {
          id: 3,
          title: 'Mobile Developer',
          type: 'Engineer',
          status: 'Fulltime',
          location: 'Jakarta',
        },
        {
          id: 4,
          title: 'Mobile Developer',
          type: 'Engineer',
          status: 'Fulltime',
          location: 'Jakarta',
        },
        {
          id: 5,
          title: 'Mobile Developer',
          type: 'Engineer',
          status: 'Fulltime',
          location: 'Jakarta',
        },
        {
          id: 6,
          title: 'Mobile Developer',
          type: 'Engineer',
          status: 'Fulltime',
          location: 'Jakarta',
        },
      ],
    };
  }

  render() {
    const jobs = this.state.jobs.map(job => (
      <Job key={job.id} job={job} />
    ));

    return (
      <div className="App-container">
        <header className="App-header">
          <Header />
        </header>

        <Article title="What We Do" bgcolor="white">
          <p>
            {
              `
              Kulina's mission is to "server the best meal with an oustanding customer experice at the 
              lowest possible price every single day".
              We want to be customer's default meal option by providing quality product with on-time delivery.
              We help customers save time and money for each meal they get from us, so the can better spend
              it on other thins that matter.
              `
            }
          </p>
          <p>
            {
              `
              We tooke pride in being the first food tech startup to join
              'Google Launchpad Accelearator'  in San Francisco,
              and the only one from Indonesia in winter 2018.
              Our startup is backed by the same investor who invested
              in Ele.me (China's unicorn food delivery startup)
              `
            }
          </p>
          <p>
            {
              `
              Join us in our missioin to delivering best meals to ten millions of Jakartans.
              Hurry! Be part of our Kulinas family.
              `
            }
          </p>
        </Article>

        <Article title="Explore Opportunities" bgcolor="#eee">
          {jobs}
        </Article>

        <Footer />

      </div>
    );
  }
}

export default App;
