import { Link } from "react-router";

const Logo = () => {
  return (
    <Link
      className="p-1.5 bg-primary text-primary-foreground font-bold text-sm md:text-base capitalize"
      to="/"
    >
      dev
    </Link>
  );
};

export default Logo;
