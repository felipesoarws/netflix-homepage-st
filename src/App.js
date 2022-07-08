import "./styles/main.css";
import { FaSearch } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import netflixLogo from "./assets/netflix.png";
import profilePic from "./assets/profile.png";

import seriesLogo from "./assets/logo.png";
import { AiFillStar } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";

import DesktopNavegation from "./src_desktop/desktopNavBar";
import DesktopMainContent from "./src_desktop/desktopMainContent";

function App() {
  return (
    <div className="App">
      <header>
        <DesktopNavegation />
        <div className="mobile-navegation-bar">
          <div className="logo">
            <img src={netflixLogo} alt="logo" />
          </div>
          <div className="profile">
            <ul>
              <li>
                <FaSearch />
              </li>
              <li>
                <BsBellFill />
              </li>
              <li>
                <img src={profilePic} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        <DesktopMainContent />
        <div className="mobile-details">
          <div className="classification">
            <p>16+</p>
          </div>
          <div className="rating">
            <div className="stars">
              <AiFillStar className="red-color" />
              <p>8.7</p>
              &#8226;
            </div>
            <div className="year">
              <p>2022</p>
              &#8226;
            </div>
            <div className="seasons">
              <p>4 Seasons</p>
            </div>
          </div>
          <div className="desc">
            <div className="title">
              <img src={seriesLogo} alt="logo" />
            </div>
            <p>
              When a young boy vanishes, a small town uncovers a mystery
              involving secret experiments, terrifying supernatural forces and
              one strange little girl.
            </p>
          </div>
          <div className="bttns">
            <button className="watch">
              <div className="icon">
                <AiFillCaretRight className="play" />
              </div>
              Watch
            </button>
            <button className="list">
              <div className="icon">
                <AiOutlinePlusCircle className="add" />
              </div>
              Add to List
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
