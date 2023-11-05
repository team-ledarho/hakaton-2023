import { createBrowserRouter } from 'react-router-dom';
import { paths } from '@paths';
import { HomePage } from '@pages/home';
import { Login } from '@pages/login';
import { Register } from '@pages/register';
import { Personal } from '@pages/personal';
import { Settings } from '@pages/settings';
import { EventPage } from '@pages/event-page';
import { Events } from '@pages/events';
import { Auth } from '@services/feature/auth.feature';

export const router = createBrowserRouter([
  {
    path: paths.home,
    element: <HomePage />,
  },
  {
    path: paths.login,
    element: <Login />,
  },
  {
    path: paths.register,
    element: <Register />,
  },
  {
    path: paths.personal,
    element: (
      <Auth>
        <Personal />
      </Auth>
    ),
  },
  {
    path: paths.settings,
    element: (
      <Auth>
        <Settings />
      </Auth>
    ),
  },
  {
    path: paths.events,
    element: <Events />,
  },
  {
    path: paths.eventpage,
    element: <EventPage />,
  },
]);
