import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import ParksList from './ParksList';

function App() {
 const [allParks, setAllParks] = useState([])

  useEffect(() => {

    fetch('https://developer.nps.gov/api/v1/parks?limit=465&api_key=b1KSaT3gid8CxzHNe1SNYD6ZGN7aCcNdWWgbTVY9')
    .then((r) => r.json())
    .then(allParksData => setAllParks(allParksData))
  }, [])



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {allParks.map((park) =>  park={park})}

        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
