import "./components/App.css";
import Passenger from "./components/Passenger";
const titanicJson = require("./data/titanic-data.json");
console.log(typeof titanicJson);

function App() {
  return (
    <div>
      <div className="title-div">
        <h1>View Titanic Data</h1>
      </div>
      {titanicJson.map((passenger) => {
        return <Passenger key={passenger["PassengerId"]} passenger={passenger}></Passenger>;
      })}
    </div>
  );
}

export default App;
