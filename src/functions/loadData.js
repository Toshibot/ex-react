import React from "react";

var self = this;
var matchday = [];

self.ajax = function(uri, method, data) {
   var request = {
       url: uri,
       type: method,
       accepts: "application/json",
       cache: false,
       dataType: "json",
       data: JSON.stringify(data),
       headers: {"X-Auth-Token": process.env.API_KEY},
       error: function (jqXHR) {
           console.log("ajax error " + jqXHR.status);
       }

   };

   return $.ajax(request);
}

const loadLadderData = () => {
   self.tasksURI = "https://api.football-data.org/v2/competitions/2021/standings";

   self.ajax(self.tasksURI, 'GET').done(function(data) {
      // console.log(data);

      var ladder = data.standings[0].table;
      console.log(ladder);

      // Construct the Ladder
      // for (i = 0; i < ladder.length; i++) {
      //     const element = ladder[i];
      //     ladderItem(element, i+1);
      // }
  })
}

const loadFixtureData = () => {
   self.matchesURI = "https://api.football-data.org/v2/competitions/2021/matches";
   self.matchdayURI = "https://api.football-data.org/v2/competitions";

   self.ajax(self.matchdayURI, 'GET').done(function(data){
      var competitions = data.competitions;

      for (i = 0; i < competitions.length; i++) {
          const comp = competitions[i];
          
          if (comp.id == 2021) {
              matchday.push(comp.currentSeason.currentMatchday);
          }
      }

      console.log(matchday);
  });

  self.ajax(self.matchesURI, 'GET').done(function(data) {

      var matches = data.matches;
      var today = new Date;
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
  })

}

export default loadLadderData;
export default loadFixtureData;