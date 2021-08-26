import './App.css';

function ParkCard({park}) {

  return (
      //will need to handle a click event to display full info in a ParkContainer
<div className="park-card" onClick={null}>
  <img className="park-image" src={park.images[0].url} alt={park.name} style={{width:'80%'}} />
  <h4>
      {park.fullName}
  </h4>
  <p><strong>
    {park.addresses[0].line1}, {park.addresses[0].city}, {park.addresses[0].stateCode} 
  </strong></p>
</div>

  )
}





export default ParkCard