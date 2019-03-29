import React from "react";
import ReactDOM from "react-dom";
import Fixture from "./components/Fixture";
import Ladder from "./components/Ladder";

const App = () => {
  return (
    <div className="u-flex">
      <Ladder />
      <Fixture />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
