import React from "react";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import teamImage from "../functions/teamImage";
import teamAbrev from "../functions/teamAbrev";

const styles = css`
  display: inline-block;
  width: 100%;
  background: #efefef;
  position: relative;
  text-align: left;
  color: #333;
  margin: 0px auto;
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  box-sizing: border-box;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  -webkit-box-flex: 0;
  flex: 0 1 auto;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  margin: 3px auto;

  &.c-ladder__item div {
    display: inline-block;
    padding: 12.5px 0;
  }
  div:nth-of-type(2n) {
    background: rgba(0, 0, 0, 0.05);
  }
  .c-ladder__item-0 {
    background: #333;
  }
  .c-ladder__item-0 div {
    color: #fff;
    background: transparent !important;
  }
  .c-ladder__item-0 div.c-ladder__team {
    padding: 12.5px !important;
  }
  .c-ladder__item-1 {
    background: #ccebd1;
  }
  .c-ladder__item-2,
  .c-ladder__item-3,
  .c-ladder__item-4 {
    background: #bddaf7;
  }
  .c-ladder__item-5,
  .c-ladder__item-6 {
    background: #fde1b4;
  }
  .c-ladder__item-18,
  .c-ladder__item-19,
  .c-ladder__item-20 {
    background: #fac4cd;
  }

  .c-ladder__position {
    -ms-flex-preferred-size: 8.333%;
    -webkit-flex-basis: 8.333%;
    flex-basis: 8.333%;
    max-width: 8.333%;
    text-align: center;
  }

  .c-ladder__team {
    -ms-flex-preferred-size: 33.333%;
    -webkit-flex-basis: 33.333%;
    flex-basis: 33.333%;
    max-width: 33.333%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    position: relative;
    padding: 0 12.5px 0 0 !important;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .c-ladder__team span {
    padding-left: 12.5px;
    line-height: 40px;
    display: inline-block;
    vertical-align: top;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .c-ladder__played,
  .c-ladder__wins,
  .c-ladder__draws,
  .c-ladder__losses,
  .c-ladder__points-for,
  .c-ladder__points-against,
  .c-ladder__percentage,
  .c-ladder__points {
    -ms-flex-preferred-size: 8.333%;
    -webkit-flex-basis: 8.333%;
    flex-basis: 8.333%;
    max-width: 8.333%;
    text-align: center;
    color: #666;
  }

  .c-ladder__icon {
    -webkit-box-shadow: 0px 2px 4px 1px rgba(51, 51, 51, 0.3);
    -moz-box-shadow: 0px 2px 4px 1px rgba(51, 51, 51, 0.3);
    box-shadow: 0px 2px 4px 1px rgba(51, 51, 51, 0.3);
    height: 41px;
    width: 41px;
    margin-bottom: -2px;
  }

  .c-ladder__points-for,
  .c-ladder__points-against {
    display: none !important;
  }

  .c-ladder__points {
    font-weight: 600;
    color: #333;
  }

  .c-ladder__percentage {
    -ms-flex-preferred-size: 8.333%;
    -webkit-flex-basis: 8.333%;
    flex-basis: 8.333%;
    max-width: 8.333%;
  }

  .c-ladder__team {
    -ms-flex-preferred-size: 41.667%;
    -webkit-flex-basis: 41.667%;
    flex-basis: 41.667%;
    max-width: 41.667%;
  }

  @media screen and (max-width: 75em) {
    .c-ladder__points-for,
    .c-ladder__points-against {
      display: none !important;
    }
    .c-ladder__percentage {
      -ms-flex-preferred-size: 8.333%;
      -webkit-flex-basis: 8.333%;
      flex-basis: 8.333%;
      max-width: 8.333%;
    }
    .c-ladder__team {
      -ms-flex-preferred-size: 41.667%;
      -webkit-flex-basis: 41.667%;
      flex-basis: 41.667%;
      max-width: 41.667%;
    }
  }

  @media screen and (max-width: 41.6875em) {
    .c-ladder__item div {
      padding-left: 0;
      padding-right: 0;
    }
    .c-ladder__item div:nth-of-type(2n) {
      background: transparent;
    }
    .c-ladder__wins,
    .c-ladder__losses,
    .c-ladder__draws {
      display: none !important;
    }
    .c-ladder__played {
      margin-left: 4.1665%;
    }
    .c-ladder__percentage {
      margin-right: 4.1665%;
    }
    .c-ladder__team {
      -ms-flex-preferred-size: 58.333%;
      -webkit-flex-basis: 58.333%;
      flex-basis: 58.333%;
      max-width: 58.333%;
    }
  }
`;

const LadderItem = props => {
  return (
    <div css={styles} className="c-ladder__item">
      <div className="c-ladder__position">{props.position}</div>
      <div className="c-ladder__team">
        <img className="c-ladder__icon" src={props.teamLogo} />
        <span>{props.teamName}</span>
      </div>
      <div className="c-ladder__played">{props.played}</div>
      <div className="c-ladder__wins">{props.won}</div>
      <div className="c-ladder__draws">{props.draw}</div>
      <div className="c-ladder__losses">{props.lost}</div>
      <div className="c-ladder__points-for">{props.goalsFor}</div>
      <div className="c-ladder__points-against">{props.goalsAgainst}</div>
      <div className="c-ladder__percentage">{props.goalDifference}</div>
      <div className="c-ladder__points">{props.points}</div>
    </div>
  );
};

export default LadderItem;
