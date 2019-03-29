import React from "react";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import home from "../img/teams/ARS/Home.png";
import away from "../img/teams/MCI/Away.png";
import Game from "./Game";

// Styles
const styles = css`
  @media screen and (min-width: 75em) {
    padding-top: 47px;

    .c-fixture h2 {
      padding-bottom: 62px;
    }
  }

  .c-game {
    &:nth-of-type(2n) {
      margin-right: 0;
    }
  }
`;

const Fixture = () => {
  return (
    <section css={styles} className="u-col-7@lg u-col-12@md u-padding-col">
      <article className="c-fixture">
        <Game
          day="Friday"
          month="March"
          date="29"
          time="15:30"
          // Home
          teamAbrevHome="ARS"
          kitHome={home}
          scoreHome="1"
          // Away
          teamAbrevAway="MCI"
          kitAway={away}
          scoreAway="3"
        />
        <Game
          day="Friday"
          month="March"
          date="29"
          time="15:30"
          // Home
          teamAbrevHome="ARS"
          kitHome={home}
          scoreHome="1"
          // Away
          teamAbrevAway="MCI"
          kitAway={away}
          scoreAway="3"
        />
        <Game
          day="Friday"
          month="March"
          date="29"
          time="15:30"
          // Home
          teamAbrevHome="ARS"
          kitHome={home}
          scoreHome="1"
          // Away
          teamAbrevAway="MCI"
          kitAway={away}
          scoreAway="3"
        />
        <Game
          day="Friday"
          month="March"
          date="29"
          time="15:30"
          // Home
          teamAbrevHome="ARS"
          kitHome={home}
          scoreHome="1"
          // Away
          teamAbrevAway="MCI"
          kitAway={away}
          scoreAway="3"
        />
        <Game
          day="Friday"
          month="March"
          date="29"
          time="15:30"
          // Home
          teamAbrevHome="ARS"
          kitHome={home}
          scoreHome="1"
          // Away
          teamAbrevAway="MCI"
          kitAway={away}
          scoreAway="3"
        />
        <Game
          day="Friday"
          month="March"
          date="29"
          time="15:30"
          // Home
          teamAbrevHome="ARS"
          kitHome={home}
          scoreHome="1"
          // Away
          teamAbrevAway="MCI"
          kitAway={away}
          scoreAway="3"
        />
        <Game
          day="Friday"
          month="March"
          date="29"
          time="15:30"
          // Home
          teamAbrevHome="ARS"
          kitHome={home}
          scoreHome="1"
          // Away
          teamAbrevAway="MCI"
          kitAway={away}
          scoreAway="3"
        />
        <Game
          day="Friday"
          month="March"
          date="29"
          time="15:30"
          // Home
          teamAbrevHome="ARS"
          kitHome={home}
          scoreHome="1"
          // Away
          teamAbrevAway="MCI"
          kitAway={away}
          scoreAway="3"
        />
        <Game
          day="Friday"
          month="March"
          date="29"
          time="15:30"
          // Home
          teamAbrevHome="ARS"
          kitHome={home}
          scoreHome="1"
          // Away
          teamAbrevAway="MCI"
          kitAway={away}
          scoreAway="3"
        />
        <Game
          day="Friday"
          month="March"
          date="29"
          time="15:30"
          // Home
          teamAbrevHome="ARS"
          kitHome={home}
          scoreHome="1"
          // Away
          teamAbrevAway="MCI"
          kitAway={away}
          scoreAway="3"
        />
      </article>
    </section>
  );
};

export default Fixture;
