import { Logo } from "./Logo";

const Header = () => {
  return (
    <nav className="w-full fixed lg:py-2 py-4 z-50 ">
      <div className="flex max-w-4xl mx-auto lg:px-0 px-6">
        <Logo />
      </div>
    </nav>
  );
};

export { Header };
