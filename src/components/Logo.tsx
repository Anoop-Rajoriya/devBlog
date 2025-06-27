import { Link } from "react-router";
import { Button } from "./ui/button";

const Logo = () => {
  return (
    <Link to="/">
      <Button className="p-1 px-2 rounded-none h-max font-bold capitalize">
        DevBlog
      </Button>
    </Link>
  );
};

export default Logo;
