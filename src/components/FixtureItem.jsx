import React from "react";
import home from "../img/teams/ARS/Home.png";
import away from "../img/teams/MCI/Away.png";

const FixtureItem = () => {
  return (
    <div className="c-fixture__game c-fixture__game--in-progress">
      <div className="c-fixture__date c-date">
        <span className="c-date__day">Friday</span>
        <span className="c-date__month">March</span>
        <span className="c-date__date">30</span>
        <span className="c-date__time">LIVE</span>
      </div>
      <div className="c-fixture__team js-fixture-team-1">
        <img className="js-team-img" src={home} />
        <span className="js-team-text">ARS</span>
        <span className="c-fixture__score js-score-text">1</span>
      </div>
      <div className="c-fixture__vs">vs</div>
      <div className="c-fixture__team js-fixture-team-2">
        <img className="js-team-img" src={away} />
        <span className="js-team-text">MCI</span>
        <span className="c-fixture__score js-score-text">3</span>
      </div>
      <div className="c-fixture__venue js-fixture-venue" />
    </div>
  );
};

export default FixtureItem;
