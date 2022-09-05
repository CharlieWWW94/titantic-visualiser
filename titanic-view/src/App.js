import React, { useState, useEffect } from "react";
import "./components/App.css";
import Passenger from "./components/Passenger";
import Search from "./components/search";
let titanicJson = require("./data/titanic-data.json");

function App() {
  const [relevantPeople, setRelevantPeople] = useState(titanicJson);

  const filterResults = (searchedName) => {
    let newList = titanicJson.filter((person) =>
      person.Name.includes(searchedName)
    );
    setRelevantPeople(newList);
  };

  const passSearchTerm = (givenSearchTerm) => {
    filterResults(givenSearchTerm);
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
