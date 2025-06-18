import { cn } from "@/lib/utils";

type Props = {
  className: string;
};

const Nav = ({ className }: Props) => {
  const styles = cn("", className);

  return <nav className={styles}>Nav</nav>;
};

export default Nav;
