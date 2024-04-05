import { NavLink } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  return (
    <nav>
        <NavLink className={({ isActive }) => (isActive ? "active" : undefined) } to="/">
            Home
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active" :undefined)} to="/about">
            Sobre
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active" :undefined)} to="/products">
            Produtos
        </NavLink>
    </nav>
  )
}

export default Navbar