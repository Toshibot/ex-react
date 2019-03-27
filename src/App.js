import React from "react";
import ReactDOM from "react-dom";
import Fixture from "./components/Fixture";
import Ladder from "./components/Ladder";

const App = () => {
  return (
    <div>
      <Ladder />
      <Fixture />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
