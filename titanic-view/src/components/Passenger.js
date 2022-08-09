import "./Passenger.css";

function Passenger(props) {
  const passenger = props.passenger;
  return (
    <div className="single-passenger">
      <div className="passenger-title">
        <h1>{passenger["PassengerId"]}</h1>
      </div>
      <div className="passenger-info">
        <p>{passenger["Name"]}</p>
        <p>{passenger["Sex"]}</p>
        <p>{passenger["Age"]}</p>
      </div>
    </div>
  );
}

export default Passenger;
