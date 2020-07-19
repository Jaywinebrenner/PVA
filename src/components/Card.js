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
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";


const Card = () => {
  const POSTS = FAKE_DATABASE.posts;
  const [expanded, setExpanded] = useState(false)
  const [isIconExpanded, setIsIconExpanded] = useState(false)

  console.log("Posts", POSTS);

  const dropDown = (postIDInput) => {
    setExpanded(postIDInput)
    if (postIDInput === expanded) {
      setExpanded(null);
    }
  };

  const toggleIcon = () => {
    setIsIconExpanded(!isIconExpanded)
  }

  let weirdTwitterDate = POSTS[0].twitterDate;
  let year = null;
  let month = null;
  let day = null;
  let actualDate = null;

  const makeTwitterDateReadable = (twitterDate) => {
    twitterDate = twitterDate.match(/.{1,2}/g);
    year = "20" + twitterDate[0];
    day = twitterDate[2];

    if (twitterDate[1] === "01") {
      month = "January";
    }
    if (twitterDate[1] === "02") {
      month = "Febuary";
    }
    if (twitterDate[1] === "03") {
      month = "March";
    }
    if (twitterDate[1] === "04") {
      month = "April";
    }
    if (twitterDate[1] === "05") {
      month = "May";
    }
    if (twitterDate[1] === "06") {
      month = "June";
    }
    if (twitterDate[1] === "07") {
      month = "January";
    }
    if (twitterDate[1] === "08") {
      month = "Febuary";
    }
    if (twitterDate[1] === "09") {
      month = "March";
    }
    if (twitterDate[1] === "10") {
      month = "April";
    }
    if (twitterDate[1] === "11") {
      month = "May";
    }
    if (twitterDate[1] === "12") {
      month = "June";
    }
    actualDate = month + " " + day + ", " + year;
  };


  let getYouTubeThumbNail = (url) => {
    if (url.includes("=") && url.includes("&")) {
      let splitOne = url.split("=");
      let youTubeID = splitOne[1].split("&")[0];
      let thumbNail = `http://img.youtube.com/vi/${youTubeID}/0.jpg`;
      return thumbNail;
    } else if (url.includes("=")) {
      let firstSplit = url.split("=");
      let youTubeID = firstSplit[1];
      let thumbNail = `http://img.youtube.com/vi/${youTubeID}/0.jpg`;
      return thumbNail;
    } else {
      let youTubeID = url.split("/")[3];
      let thumbNail = `http://img.youtube.com/vi/${youTubeID}/0.jpg`;
      return thumbNail;
    }
  };

  const collapsedIcon = (
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
  );

    const expandedIcon = (
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
        <FaChevronDown />
      </IconContext.Provider>
    );



  return (
    <React.Fragment>
      {POSTS.map((value) => {
        makeTwitterDateReadable(value.twitterDate);
        return (
          <div className="cardWrapper" data-simplebar>
            <div className="cardHeader">
              <div className="cardHeaderColOne">
                <img
                  className="cardHeaderThumbNail"
                  src={getYouTubeThumbNail(value.youTube)}
                />
              </div>

              <div className="cardHeaderColTwo">
                <h5>Date: {actualDate}</h5>

                <h5>Time: {value.twitterTime}</h5>
                <h5>
                  Location: {value.city} , {value.state}
                </h5>
              </div>

              <div className="cardHeaderColThree">
                <h5>{value.text}</h5>
              </div>

              <div className="cardHeaderColFour">
                <div
                  onClick={() => {
                    dropDown(value.postID);
                  }}
                >
                  {expanded === value.postID ? expandedIcon : collapsedIcon}
                </div>
              </div>
            </div>
            <Collapse isOpened={expanded === value.postID ? true : false}>
              <hr></hr>
              <SimpleBar>
                <div style={{ color: "black", height: "400px" }}>
                  <div className="cardBody">
                    <div className="cardBodyColOne">
                      <TwitterTweetEmbed
                        tweetId={value.tweetURL.split("/")[5]}
                        sourceType="profile"
                        screenName="HeyMarkKop"
                        options={{
                          width: "350px",
                          height: "390px",
                        }}
                      ></TwitterTweetEmbed>
                    </div>

                    <div className="cardBodyColTwo">
                      <div>
                        <ReactPlayer
                          className="reactPlayer"
                          url={value.youTube}
                          width="525px"
                          // height="325px"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="cardFooter">
                    {" "}
                    {/* <h5 className="footerText">Card Footer</h5> */}
                  </div>
                </div>
              </SimpleBar>
            </Collapse>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Card;
