import Header from '@components/landing/header';
import { Auth } from '@services/feature/auth.feature';
import Cookie from '../cookie';

export const Layout = ({ children }) => {
  return (
    <>
      <Cookie />
      {children}
    </>
  );
};
