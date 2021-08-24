function ParkCard({image, name, address}) {

    return (
        //will need to handle a click event to display full info in a ParkContainer
<div>
    {image}
    <h4>
        {name} |  {address} 
    </h4>

</div>
        
    )
}



// allParks.map((park) => console.log(park.images[0].url)) //this is each park's 1st image url

export default ParkCard