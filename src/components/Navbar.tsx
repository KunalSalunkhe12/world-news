import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 right-0 px-6 md:px-12 py-5 bg-black text-white text-3xl">
      <Link to="/" className="font-bold">
        World News 📰
      </Link>
    </nav>
  );
};

export default Navbar;
