import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero from "../../assets/hero.webp";
import heroTitle from "../../assets/hero-title.png";
import play from "../../assets/play.png";
import info from "../../assets/info.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={heroTitle} alt="" className="caption-img" />
          <h2>Season 2 coming December 26</h2>
          <p>
            A story of people who fail at life for various reasons, but suddenly
            receive a mysterious invitation to participate in a survival game to
            win more than 38 million US dollars. The game takes place on an
            isolated island and the participants are locked up until there is a
            final winner.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play} /> Play
            </button>
            <button className="btn dark-btn">
              <img src={info} />
              More Info
            </button>
          </div>
          <TitleCards />
          <div className="more-cards">
            <TitleCards title={"Because you watched Fast And Furious"} category={"top_rated"}/>
            <TitleCards title={"Only on Nutflix"} category={"popular"}/>
            <TitleCards title={"Upcoming"} category={"upcoming"}/>
            <TitleCards title={"Top Picks For You"} category={"top_rated"}/>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
