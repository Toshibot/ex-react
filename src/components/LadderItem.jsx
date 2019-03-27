import React from "react";
import teamImage from "../functions/teamImage";
import teamAbrev from "../functions/teamAbrev";

const LadderItem = array => {
  const teamLogo = teamImage(array.team.name);
  const teamName = teamAbrev(array.team.name[0].name);
  const playedGames = array.playedGames;
  const won = array.won;
  const draw = array.draw;
  const lost = array.lost;
  const goalsFor = array.goalsFor;
  const goalsAgainst = array.goalsAgainst;
  const goalDifference = array.goalDifference;
  const points = array.points;

  return (
    <div className=".c-ladder__item">
      <div className=".c-ladder__team">
        <img src={teamLogo} />
        <span>{teamName}</span>
      </div>
      <div className=".c-ladder__played">{playedGames}</div>
      <div className=".c-ladder__wins">{won}</div>
      <div className=".c-ladder__draws">{draw}</div>
      <div className=".c-ladder__losses">{lost}</div>
      <div className=".c-ladder__points-for">{goalsFor}</div>
      <div className=".c-ladder__points-against">{goalsAgainst}</div>
      <div className=".c-ladder__percentage">{goalDifference}</div>
      <div className=".c-ladder__points">{points}</div>
    </div>
  );
};

export default LadderItem;
