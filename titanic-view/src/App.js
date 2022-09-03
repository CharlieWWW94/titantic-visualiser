import React, { useState } from "react";
import "./components/App.css";
import Passenger from "./components/Passenger";
import Search from "./components/search";
let titanicJson = require("./data/titanic-data.json");
console.log(typeof titanicJson);

function App() {
  const [relevantPeople, setRelevantPeople] = useState(titanicJson);
  const [searchItem, setSearchItem] = useState("");

  const filterResults = (searchedName) => {
   let newList = titanicJson.filter(person => person.Name.includes(searchedName));
    console.log(newList);
    setRelevantPeople(newList);
  };

  const passSearchTerm = (givenSearchTerm) => {
    setSearchItem(givenSearchTerm);
    console.log(searchItem);
    filterResults(searchItem);
  };

  return (
    <div>
      <div className="title-div">
        <h1>View Titanic Data</h1>
      </div>
      {<Search onPassSearchTerm={passSearchTerm}></Search>}
      {relevantPeople.map((passenger) => {
        return (
          <Passenger
            key={passenger["PassengerId"]}
            passenger={passenger}
          ></Passenger>
        );
      })}
    </div>
  );
}

export default App;
