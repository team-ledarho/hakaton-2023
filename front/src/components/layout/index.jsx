import Cookie from '@components/cookie';
import Footer from '@components/footer';

export const Layout = ({ children }) => {
  return (
    <>
      <Cookie />
      {children}
      <Footer />
    </>
  );
};
