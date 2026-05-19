import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="flex justify-end text-3xl p-7 bg-pink-500 text-white gap-6">
      <NavLink to="" className={({ isActive }) => (isActive ? "text-black" : "")}>Home</NavLink>
      <NavLink to="create-emp" className={({ isActive }) => (isActive ? "text-black" : "")}>CreateEmp</NavLink>
      <NavLink to="list" className={({ isActive }) => (isActive ? "text-black" : "")}>ListOfEmps</NavLink>
    </nav>
  );
}

export default Header;