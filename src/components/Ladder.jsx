import React from "react";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import LadderItem from "./LadderItem";
import LadderHeader from "./LadderHeader";
import LoadLadder from "../functions/LoadLadder";

import logo from "../img/teams/MCI/Logo.png";

const styles = css`
  @media screen and (min-width: 90em) {
    padding-right: 0;
  }

  .c-ladder h2 {
    padding-bottom: 15px;
  }
`;

const Ladder = () => {
  return (
    <div css={styles} className="u-col-5@lg u-col-12@md u-padding-col">
      <div className="c-ladder">
        <LadderHeader />
        <LadderItem
          position="1"
          teamLogo={logo}
          teamName="Man City"
          played="30"
          won="24"
          lost="4"
          draw="2"
          goalDifference="58"
          points="74"
        />
        <LadderItem
          position="1"
          teamLogo={logo}
          teamName="Man City"
          played="30"
          won="24"
          lost="4"
          draw="2"
          goalDifference="58"
          points="74"
        />
        <LadderItem
          position="1"
          teamLogo={logo}
          teamName="Man City"
          played="30"
          won="24"
          lost="4"
          draw="2"
          goalDifference="58"
          points="74"
        />
        <LadderItem
          position="1"
          teamLogo={logo}
          teamName="Man City"
          played="30"
          won="24"
          lost="4"
          draw="2"
          goalDifference="58"
          points="74"
        />
        <LadderItem
          position="1"
          teamLogo={logo}
          teamName="Man City"
          played="30"
          won="24"
          lost="4"
          draw="2"
          goalDifference="58"
          points="74"
        />
        <LadderItem
          position="1"
          teamLogo={logo}
          teamName="Man City"
          played="30"
          won="24"
          lost="4"
          draw="2"
          goalDifference="58"
          points="74"
        />
        <LadderItem
          position="1"
          teamLogo={logo}
          teamName="Man City"
          played="30"
          won="24"
          lost="4"
          draw="2"
          goalDifference="58"
          points="74"
        />
        <LadderItem
          position="1"
          teamLogo={logo}
          teamName="Man City"
          played="30"
          won="24"
          lost="4"
          draw="2"
          goalDifference="58"
          points="74"
        />
        <LadderItem
          position="1"
          teamLogo={logo}
          teamName="Man City"
          played="30"
          won="24"
          lost="4"
          draw="2"
          goalDifference="58"
          points="74"
        />
        <LadderItem
          position="1"
          teamLogo={logo}
          teamName="Man City"
          played="30"
          won="24"
          lost="4"
          draw="2"
          goalDifference="58"
          points="74"
        />
        <LadderItem
          position="1"
          teamLogo={logo}
          teamName="Man City"
          played="30"
          won="24"
          lost="4"
          draw="2"
          goalDifference="58"
          points="74"
        />
        <LadderItem
          position="1"
          teamLogo={logo}
          teamName="Man City"
          played="30"
          won="24"
          lost="4"
          draw="2"
          goalDifference="58"
          points="74"
        />
        <LadderItem
          position="1"
          teamLogo={logo}
          teamName="Man City"
          played="30"
          won="24"
          lost="4"
          draw="2"
          goalDifference="58"
          points="74"
        />
        <LadderItem
          position="1"
          teamLogo={logo}
          teamName="Man City"
          played="30"
          won="24"
          lost="4"
          draw="2"
          goalDifference="58"
          points="74"
        />
        <LadderItem
          position="1"
          teamLogo={logo}
          teamName="Man City"
          played="30"
          won="24"
          lost="4"
          draw="2"
          goalDifference="58"
          points="74"
        />
        <LadderItem
          position="1"
          teamLogo={logo}
          teamName="Man City"
          played="30"
          won="24"
          lost="4"
          draw="2"
          goalDifference="58"
          points="74"
        />
        <LadderItem
          position="1"
          teamLogo={logo}
          teamName="Man City"
          played="30"
          won="24"
          lost="4"
          draw="2"
          goalDifference="58"
          points="74"
        />
        <LadderItem
          position="1"
          teamLogo={logo}
          teamName="Man City"
          played="30"
          won="24"
          lost="4"
          draw="2"
          goalDifference="58"
          points="74"
        />
        <LadderItem
          position="1"
          teamLogo={logo}
          teamName="Man City"
          played="30"
          won="24"
          lost="4"
          draw="2"
          goalDifference="58"
          points="74"
        />
        <LadderItem
          position="1"
          teamLogo={logo}
          teamName="Man City"
          played="30"
          won="24"
          lost="4"
          draw="2"
          goalDifference="58"
          points="74"
        />
      </div>
    </div>
  );
};

export default Ladder;
