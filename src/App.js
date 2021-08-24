
import './App.css';
import React, {useEffect, useState} from 'react';
// import ParksList from './ParksList';
//import ParkCard from './ParkCard';

function App() {
const [allParks, setAllParks] = useState([])

  useEffect(() => {

    fetch('https://developer.nps.gov/api/v1/parks?limit=465&api_key=b1KSaT3gid8CxzHNe1SNYD6ZGN7aCcNdWWgbTVY9')
    .then((r) => r.json())
    .then(allParksData => setAllParks(allParksData.data))
    
  }, [])
 
  console.log(allParks)

  return (
    <div >
       {/* <header className="park-list">
           <section>
           <ParksList allParks={allParks}  />
           </section>
       </header> */}
     </div>
    )
  }


export default App;
