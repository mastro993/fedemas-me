import React from "react";

type SectionProps = {
  title?: string;
  subtitle?: string;
};

const Section = ({ children, title, subtitle }: React.PropsWithChildren<SectionProps>) => {
  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <div className="w-full min-h-screen flex flex-col justify-center relative max-w-4xl lg:px-0 px-6 text-white">
        {title && <h3 className="md:text-3xl text-2xl font-bold uppercase italic">{title}</h3>}
        {subtitle && <h4 className="md:text-lg text-base text-gray-400 uppercase font-bold italic">{subtitle}</h4>}
        {children}
      </div>
    </section>
  );
};

export { Section };
