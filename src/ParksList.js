import React from 'react';
import ParkCard from './ParkCard'

function ParksList({allParks, showParkInfo}) {
const eachPark = (allParks.map((park) => (
    <ParkCard 
        showParkInfo={showParkInfo}
        key={park.id}
        park={park}        
    />
)))


    return(
        <main>
            <div>
                {eachPark}
            </div>
        </main>
    )
    }


    export default ParksList