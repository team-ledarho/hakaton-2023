import Header from '@components/landing/header';
import { Auth } from '@services/feature/auth.feature';

export const Layout = ({ children }) => {
  return ( 
    <>
    <Auth>
      <Header />
    </Auth>
    {children}
    </>
    );
};
