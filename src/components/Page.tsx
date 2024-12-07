const Page = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="lg:p-6 lg:pt-32 p-4 w-screen h-screen">
      <div className="flex flex-col max-w-4xl mx-auto md:px-4 text-gray-100">{children}</div>
    </div>
  );
};

export { Page };
