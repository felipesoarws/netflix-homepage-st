import { FaSearch } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import netflixLogo from "../assets/netflix.png";
import profilePic from "../assets/profile.png";
const link = "https://github.com/felipesoarws";

const DesktopNavegation = () => {
  return (
    <div className="desktop-navegation-bar">
      <div className="logo">
        <img src={netflixLogo} alt="logo" />
      </div>
      <div className="itens">
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Recently Added</li>
          <li>
            <a href={link} target="blank">
              @felipesoarws
            </a>
          </li>
        </ul>
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
  );
};
export default DesktopNavegation;
