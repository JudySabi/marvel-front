import logo from "../assets/img/logo_marvel.png";
import { Link } from "react-router-dom";

const Header = ({ search, setSearch }) => {
  const handleSearch = (event) => {
    setSearch(event);
  };

  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt={logo} />
      </Link>
      <input
        type="text"
        placeholder="Ant-Man"
        value={search}
        onChange={(elem) => handleSearch(elem.target.value)}
      />
      <div>
        <Link to="/">Personnages</Link>
        <Link to="/comics">Comics</Link>
      </div>
    </div>
  );
};

export default Header;
