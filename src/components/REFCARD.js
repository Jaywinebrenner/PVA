

import React, { useState } from "react";
import card from "../css/card.css";
import cop from "../media/cop.jpg";
import ReactPlayer from "react-player";
import { FAKE_DATABASE } from "../constants/FakeDatabase.js";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { arrowLeft } from "react-icons/fa";
import { FontAwesome, FaChevronLeft, FaChevronDown } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Collapse } from "react-collapse";

const Card = () => {
  const [isOpened, setIsOpened] = useState(false);

  const dropDown = () => {
    setIsOpened(!isOpened);
  };

  console.log(isOpened);

  return (
    <React.Fragment>
      <div
        isOpened={isOpened}
        onClick={() => dropDown()}
        style={{
          backgroundColor: "yellow",
          // maxHeight: expanded === value.treeID ? 190 : 0,
        }}
      >
        <h1>WHAT THE FUCK, THIS IS THE HEADER</h1>
        <IconContext.Provider
          value={{
            style: {
              marginTop: "10px",
              fontSize: "30px",
              color: "black",
              alignItems: "center",
              justifyContent: "center",
              flex: 5,
            },
          }}
        >
          <FaChevronLeft />
        </IconContext.Provider>
      </div>
      <Collapse isOpened={isOpened}>
        <div>
          You think water moves fast? You should see ice. It moves like it has a
          mind. Like it knows it killed the world once and got a taste for
          murder. After the avalanche, it took us a week to climb out. Now, I
          don't know exactly when we turned on each other, but I know that seven
          of us survived the slide... and only five made it out. Now we took an
          oath, that I'm breaking now. We said we'd say it was the snow that
          killed the other two, but it wasn't. Nature is lethal but it doesn't
          hold a candle to man.
        </div>
      </Collapse>
    </React.Fragment>
  );
};

export default Card;
