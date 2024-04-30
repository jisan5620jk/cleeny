/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const TeamCard = ({testiThumb,socialIcon,socialIcon2,socialIcon3,testiTitle,testiDesc}) => {
  return (
    <div>
      <div>
        <img src={testiThumb} />
        <ul>
          <li>
            <Link to={'/'} ><button>{socialIcon}</button></Link>
          </li>
          <li>
            <Link to={'/'} ><button>{socialIcon2}</button></Link>
          </li>
          <li>
            <Link to={'/'} ><button>{socialIcon3}</button></Link>
          </li>
        </ul>
      </div>
      <div>
        <h5>{testiTitle}</h5>
        <p>{testiDesc}</p>
      </div>
    </div>
  );
};

export default TeamCard;
