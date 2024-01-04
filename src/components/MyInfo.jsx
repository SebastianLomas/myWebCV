// React Imports
import React from "react";
// Style
import "../style/MyInfo.scss"
// Assets Imports
// // Video
import coverVideo from "../assets/videos/finalCoverVideo.mp4"
// // Image
import profilePic from "../example_pic.jpg"
import linkedInLogo from "../assets/socialMediaIcons/LinkedInLogo.png"
import githubLogo from "../assets/socialMediaIcons/github-mark.svg"
import twitterLogo from "../assets/socialMediaIcons/x-logo-black.png"
import gmailLogo from "../assets/socialMediaIcons/gmail.png"

// Code
const MyInfo = function() {
  return (
    <article className="myInfo">
      <section className="myInfo__cover">
        <video src={coverVideo}></video>
      </section>
      <picture className="myInfo__photo">
        <img src={profilePic} alt="Me" srcset="" />
      </picture>
      <section className="myInfo__data">
        <section className="myInfo__data__texts">
          <h1 className="title name">
            <span>
              sebastian
            </span>
            <br />
            <span>
              lomas
            </span>
          </h1>
          <div className="position">
            <div className="firstLine"></div>
            <h2 className="subtitle">WebDev</h2>
            <div className="secondLine"></div>
          </div>
        </section>
        <section className="myInfo__data__contact">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={linkedInLogo} alt="" srcset="" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="" srcset="" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={twitterLogo} alt="" srcset="" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={gmailLogo} alt="" srcset="" />
          </a>
        </section>
      </section>
    </article>
  )
}

export default MyInfo;