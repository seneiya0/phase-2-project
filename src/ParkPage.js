//this page will display after clicking a ParkCard. Park info here will include detailed description, Events, Fees,
// import React, {useState} from 'react';
import './App.css';


function ParkPage({aPark}) {
       
const parkInfo = {
    name: aPark.fullName,
    // hours: aPark.operatingHours,
    // fees: aPark.entranceFees,
    description: aPark.description,
    // activities: aPark.activities,
    designation: aPark.designation,
    url: aPark.url
    
}

// const [parkPageView, setParkPageView] = useState(parkinfo)
    
 


    return(
        <div className="park-div">
            <h1>{parkInfo.name}</h1>
            <p>{parkInfo.description}</p>
            <p> {parkInfo.designation}</p>
            <a href={parkInfo.url}>Visit Park's site for latest info</a>
            {/* <p>{parkInfo.hours}</p> */}
           

        </div>
    )
};

export default ParkPage