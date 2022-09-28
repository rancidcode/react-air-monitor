import { useNavigate } from "react-router-dom";

import { AiOutlineHome } from "react-icons/ai";
import { BiTable } from "react-icons/bi";

const Navbar = ({ id }) => {
  const navigate = useNavigate();
  const style = { color: "white", fontSize: "1.5em" };
  return (
    <div id="navbar">
      <div
        className={
          id === "dashboard" ? "icon-outer selected-nav" : "icon-outer"
        }
        onClick={() => {
          navigate("/");
        }}
      >
        <AiOutlineHome style={style} />
      </div>
      <div
        className={id === "table" ? "icon-outer selected-nav" : "icon-outer"}
        onClick={() => {
          navigate("/table");
        }}
      >
        <BiTable style={style} />
      </div>
    </div>
  );
};

export default Navbar;
