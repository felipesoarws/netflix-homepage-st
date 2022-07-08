import seriesLogo from "../assets/logo.png";
import { AiFillStar } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";

const MobileMainContent = () => {
  return (
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
          When a young boy vanishes, a small town uncovers a mystery involving
          secret experiments, terrifying supernatural forces and one strange
          little girl.
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
  );
};

export default MobileMainContent;
