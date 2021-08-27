import React from 'react';


function ParkPage({aPark}) {

  const parkInfo = {
    name: aPark.fullName,
    // hours: aPark.operatingHours,
    // fees: aPark.fees,
    description: aPark.description,
    // activities: aPark.activities,
    designation: aPark.designation,
    url: aPark.url
}


// console.log(aPark)

    return(
        <main>
            <div className='park-div'>
              <h1>{parkInfo.name}</h1>
              <p>{parkInfo.description}</p>
              <br></br>
              <p> {parkInfo.designation}</p>
              <a href={parkInfo.url}>Visit Park site for latest info</a>
            </div>
        </main>
    )

}

export default ParkPage
