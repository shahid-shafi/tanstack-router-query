import { Link } from "@tanstack/react-router";

const Header = () => {
  return (
    <div className="px-6 py-4 flex justify-between">
      <h1>Logo</h1>
      <span className="flex gap-4">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </span>
    </div>
  );
};

export default Header;
