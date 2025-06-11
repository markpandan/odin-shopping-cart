import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className={`container ${styles.navbarContainer}`}>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <p>Shop And Go!</p>
        </Link>

        <Link to={"/cart"}>
          <button>Cart Button</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
