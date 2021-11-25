import { Logo } from "../Logo";


const Navigation: React.FC = () => {
  return (
    <nav className="w-full fixed lg:py-6 py-2 z-50 lg:h-32 h-24">
      <div className="flex max-w-4xl mx-auto lg:px-0 px-6 h-full">
        <Logo />
      </div>
    </nav>
  );
};

export default Navigation;