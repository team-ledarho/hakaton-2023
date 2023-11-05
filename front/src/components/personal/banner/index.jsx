import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../services/slices/authSlice';
import { LogoutIcon } from '../../icons';

export const Banner = ({ info }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="rounded-lg bg-white pb-8 shadow-xl">
      <div className="absolute right-12 mt-4 rounded"></div>
      <div className="h-[250px] w-full">
        <img
          src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
          className="h-full w-full rounded-tl-lg rounded-tr-lg"
        />
      </div>
      <div className="-mt-20 flex flex-col items-center">
        <img
          src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
          className="w-40 rounded-full border-4 border-white"
        />
        <div className="mt-2 flex items-center space-x-2">
          <p className="text-2xl">{info.username}</p>
          <span className="rounded-full bg-blue-500 p-1" title="Verified">
            <svg
              className="h-2.5 w-2.5 text-gray-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </span>
        </div>
        <p className="text-gray-700">Frontend React Developer</p>
        <p className="text-sm text-gray-500">Russia, Moscow</p>
      </div>
      <div className="mt-2 flex flex-1 flex-col items-center justify-end px-8 lg:items-end">
        <div className="mt-2 flex items-center space-x-4">
          <button
            onClick={() => navigate(`message`)}
            className="flex items-center space-x-2 rounded bg-blue-600 px-4 py-2 text-sm text-gray-100 transition duration-100 hover:bg-blue-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Написать</span>
          </button>
          <button
            onClick={onLogout}
            className="flex items-center space-x-2 rounded bg-blue-600 px-4 py-2 text-sm text-gray-100 transition duration-100 hover:bg-blue-700"
          >
            <LogoutIcon className="h-5 w-5" />
            <span>Выход</span>
          </button>
        </div>
      </div>
    </div>
  );
};
