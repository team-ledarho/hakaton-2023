import { Header } from "@components//header";

export const Layout = ({ children }) => {
  return (
    <div className="w-[80%] m-auto">
      <Header />
      {children}
    </div>
  );
};
