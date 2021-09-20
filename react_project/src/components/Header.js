import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul className="navbar nav">
          <li className="nav-element logo">SecretMessage</li>
          <li>
            <NavLink exact className="nav-element" to="/" aria-current="true">
              Home
            </NavLink>
          </li>
          <li className="">
            <NavLink className="nav-element" to="/note">
              Message
            </NavLink>
          </li>
          <li className="">
            <NavLink className="nav-element" to="/create">
              Create
            </NavLink>
          </li>
          <li className="">
            <NavLink className="nav-element" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
