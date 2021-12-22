import { useState } from "react";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div>
      <div className="container">
        <nav>
          <ul id="menu-ctn">
            <li id="menu" onClick={() => setDropdown(!dropdown)}>
              My Store
              {dropdown ? (
                <ul id="dropdown">
                  <li>Fish</li>
                  <li>Gear</li>
                  <li>Boats</li>
                </ul>
              ) : (
                ""
              )}
            </li>
            <li>About Us</li>
            <li>Home</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;
