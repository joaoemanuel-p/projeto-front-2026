import "./Header.css";
import avatar from "../../assets/avatar.svg";

function Header({ titulo }) {
  return (
    <header className="header">
      <h1>{titulo}</h1>
      <img src={avatar} alt="avatar" />
    </header>
  );
}

export default Header;