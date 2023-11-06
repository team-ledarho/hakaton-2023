import Cookie from '@components/cookie';

export const Layout = ({ children }) => {
  return (
    <>
      <Cookie />
      {children}
    </>
  );
};
