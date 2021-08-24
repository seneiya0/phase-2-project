function ParkCard({park}) {

    return (
        //will need to handle a click event to display full info in a ParkContainer
<div>
    <img src={park.images[0].url} alt={park.images[0].altText} />
    <h4>
        {park.name} |  {park.address} 
    </h4>

</div>
        
    )
}



// allParks.map((park) => console.log(park.images[0].url)) //this is each park's 1st image url

export default ParkCard