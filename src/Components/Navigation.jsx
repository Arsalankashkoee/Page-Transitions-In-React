import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-violet-200 rounded-lg shadow-lg p-3">
      <ul className="flex items-center justify-center gap-5  ">
        <li className="py-1 px-3 rounded-lg">
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive ? "text-violet-700" : null
            }
          >
            Home
          </NavLink>
        </li>

        <li className="py-1 px-3 rounded-lg">
          <NavLink
            to="/about-us"
            className={(navData) =>
              navData.isActive ? "text-violet-700" : null
            }
          >
            About Us
          </NavLink>
        </li>

        <li className="py-1 px-3 rounded-lg">
          <NavLink
            to="/menu"
            className={(navData) =>
              navData.isActive ? "text-violet-700" : null
            }
          >
            Menu
          </NavLink>
        </li>

        <li className="py-1 px-3 rounded-lg">
          <NavLink
            to="/contact"
            className={(navData) =>
              navData.isActive ? "text-violet-700" : null
            }
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
