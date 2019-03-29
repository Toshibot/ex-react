import React from "react";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";

// CSS Vars
import sizes from "../vars/sizes";
import colors from "../vars/colors";

// Styles
const styles = css`
  background: ${colors.grey_dark};
  color: ${colors.white};
  width: 49%;
  margin-bottom: 17px;
  margin-right: 1.5%;
  display: inline-block;

  .c-game {
    &__vs {
      display: inline-block;
      padding: 0 ${sizes.base};
      vertical-align: top;
      margin-top: ${sizes.base};
    }

    &__team {
      display: inline-block;
      text-align: center;
      width: 55px;
      font-size: 12px;
      line-height: 16px;

      img,
      span {
        display: block;

        &.js-score-text {
          padding-top: 6.25px;
        }
      }

      img {
        width: 55px;
        height: 55px;
        text-align: center;
        margin: 1px 0 6.25px;
      }
    }

    &__venue {
      padding: 0px 0 12.5px;
      font-size: 12px;
    }
  }

  .c-date {
    padding: 12.5px 0 12.5px;
    line-height: 1.5;

    span {
      font-weight: 600;
    }

    span,
    time {
      display: inline-block;
    }

    &__day,
    &__date {
      margin-right: 10px;
    }

    &__month {
      margin-right: 5px;
    }

    &__time {
      font-size: 16px;
    }
  }
`;

const Game = props => {
  // Template
  return (
    <figure css={styles} className="c-game">
      <div className="c-date">
        <span className="c-date__day">{props.day}</span>
        <span className="c-date__month">{props.month}</span>
        <span className="c-date__date">{props.date}</span>
        <time className="c-date__time">{props.time}</time>
      </div>
      <div className="c-game__team js-fixture-team-1">
        <img className="js-team-img" src={props.kitHome} />
        <span className="js-team-text">{props.teamAbrevHome}</span>
        <span className="c-game__score js-score-text">{props.scoreHome}</span>
      </div>
      <div className="c-game__vs">vs</div>
      <div className="c-game__team js-fixture-team-2">
        <img className="js-team-img" src={props.kitAway} />
        <span className="js-team-text">{props.teamAbrevAway}</span>
        <span className="c-game__score js-score-text">{props.scoreAway}</span>
      </div>
      <div className="c-game__venue js-fixture-venue" />
    </figure>
  );
};

export default Game;
