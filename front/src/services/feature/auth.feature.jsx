import { Navigate } from 'react-router-dom';
import { useCurrentQuery } from '../auth/authQuery';
import { useSelector } from 'react-redux';
import { selectorUser } from '../slices/authSlice';
import { paths } from '../../paths';

export const Auth = ({ children }) => {
  const { isLoading } = useCurrentQuery();

  const user = useSelector(selectorUser);

  if (isLoading) return (<span></span>);

  return user ? children : <Navigate to={paths.login} />;
};

/* 
Компонент делает запрос юзера на получение самого себя
исходия из запроса прогружается loader.
Возвращает ReactNode(дочерние компоненты)
Для наглядности смотрите в main.jsx
*/
