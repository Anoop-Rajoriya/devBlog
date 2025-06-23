import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="border-t-2 border-border flex items-center justify-center gap-2">
      {["github", "linkedIn", "twiiter"].map((name) => (
        <Button variant="link" className="capitalize">{name}</Button>
      ))}
    </footer>
  );
};

export default Footer;
