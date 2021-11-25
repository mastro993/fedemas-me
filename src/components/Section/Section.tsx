import React from "react";

const Section: React.FC = ({ children }) => {
  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <div className="w-full min-h-screen flex flex-col justify-center relative max-w-4xl lg:px-0 px-6 text-white">
        {children}
      </div>
    </section>
  );
};

export default Section;