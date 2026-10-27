import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

export default function Navbar() {
  const count = useAppSelector((s) => s.rooms.length);

  return (
    <motion.header
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
    >
      <div className="navbar-inner">
        <Link to="/" className="logo">
          <span className="logo-mark">✦</span> Aurora<span>Hotels</span>
        </Link>
        <nav className="nav-links">
          <NavLink to="/" end>მთავარი</NavLink>
          <NavLink to="/rooms">
            ნომრები <b className="badge">{count}</b>
          </NavLink>
          <NavLink to="/add-room" className="nav-cta">+ ოთახის დამატება</NavLink>
        </nav>
      </div>
    </motion.header>
  );
}
