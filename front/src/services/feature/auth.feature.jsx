import { useNavigate } from "react-router-dom";
import { useCurrentQuery } from "../auth/authQuery";
import { useSelector } from "react-redux";
import { selectorUser } from "../slices/authSlice";
import React from "react";
import { paths } from "../../paths";

export const Auth = ({ children }) => {
  const { isLoading } = useCurrentQuery();

  const user = useSelector(selectorUser);
  const navigate = useNavigate();

  React.useEffect(() => {
    return async () => {
      if (!user) {
        navigate(paths.login);
      }
    };
  }, []);

  if (isLoading) return <span>Loading...</span>;

  return children;
};

/* 
Компонент делает запрос юзера на получение самого себя
исходия из запроса прогружается loader.
Возвращает ReactNode(дочерние компоненты)
Для наглядности смотрите в main.jsx
*/
