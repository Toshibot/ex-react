import React from "react";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const styles = css`
  &.c-ladder__item-0 {
    display: inline-block;
    width: 100%;
    position: relative;
    text-align: left;
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
    background: #333;
  }
  &.c-ladder__item-0 div {
    color: #fff;
    background: transparent !important;
    display: inline-block;
    padding: 12.5px 0;
  }
  &.c-ladder__item-0 div.c-ladder__team {
    padding: 12.5px !important;
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
`;

const LadderHeader = () => {
  return (
    <div css={styles} className="c-ladder__item-0 c-ladder__item">
      <div className="c-ladder__position">Pos.</div>
      <div className="c-ladder__team">Team</div>
      <div className="c-ladder__played">P</div>
      <div className="c-ladder__wins">W</div>
      <div className="c-ladder__losses">L</div>
      <div className="c-ladder__draws">D</div>
      <div className="c-ladder__points-for">F</div>
      <div className="c-ladder__points-against">A</div>
      <div className="c-ladder__percentage">GD</div>
      <div className="c-ladder__points">Pts</div>
    </div>
  );
};

export default LadderHeader;
