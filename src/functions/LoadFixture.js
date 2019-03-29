import React from "react";
import LoadData from "./LoadData";

const LoadFixture = () => {
  self = this;
  self.ajax = LoadData;
  self.matchesURI =
    "https://api.football-data.org/v2/competitions/2021/matches";
  self.matchdayURI = "https://api.football-data.org/v2/competitions";

  self.ajax(self.matchdayURI, "GET").done(function(data) {
    var competitions = data.competitions;

    for (i = 0; i < competitions.length; i++) {
      const comp = competitions[i];

      if (comp.id == 2021) {
        matchday.push(comp.currentSeason.currentMatchday);
      }
    }

    console.log(matchday);
  });

  self.ajax(self.matchesURI, "GET").done(function(data) {
    var matches = data.matches;
    var today = new Date();
    var currentRound = [];
    var currentRoundNo = matchday[0];

    // $('.js-fixture-round').text("Matchday " + currentRoundNo);

    // for (i = 0; i < matches.length; i++) {
    //     const element = matches[i];

    //     if (element.matchday == currentRoundNo) {
    //         currentRound.push(element);
    //     }
    // }

    console.log(data);

    // for (i = 0; i < currentRound.length; i++) {
    //     const element = currentRound[i];

    //     fixtureItem(element);
    // }
  });
};

export default LoadFixture;
