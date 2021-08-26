import React from 'react';
import ParkCard from './ParkCard'

function ParksList({allParks}) {

    const eachPark = allParks.map((park) =>  
    <ParkCard 
    key={park.id}
    park={park} 
    />)

    return(
        <main>
            <div>
               {eachPark}
            </div>
        </main>
    )
}

export default ParksList