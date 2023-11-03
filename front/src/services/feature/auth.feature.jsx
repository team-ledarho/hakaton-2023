import { useCurrentQuery } from "../auth/authQuery";

export const Auth = ({ children }) => {
  const { isLoading } = useCurrentQuery();

  if (isLoading) return <span>Loading...</span>;

  return children;
};

/* 
Компонент делает запрос юзера на получение самого себя
исходия из запроса прогружается loader.
Возвращает ReactNode(дочерние компоненты)
Для наглядности смотрите в main.jsx
*/
