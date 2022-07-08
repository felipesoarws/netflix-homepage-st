import { FaSearch } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import netflixLogo from "../assets/netflix.png";
import profilePic from "../assets/profile.png";

const MobileNavegation = () => {
  return (
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
  );
};
export default MobileNavegation;
