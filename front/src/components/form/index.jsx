import {useState} from "react";
import { useForm } from "react-hook-form";
import {
  useLoginMutation,
  useRegisterMutation,
} from "../../services/auth/authQuery";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { paths } from "../../paths";
import Header from "@components/landing/header";

const initialUserLogin = { password: "", identifier: "" };
const initialUserRegister = { password: "", email: "", username: "" };

export const Form = ({ type }) => {
  const [user, setUser] = useState(
    type === "login" ? initialUserLogin : initialUserRegister,
  );
  const [onLogin] = useLoginMutation();
  const [onRegister] = useRegisterMutation();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const isUpperCase = (value) => {
    // Функция для проверки, содержит ли строка символы в верхнем регистре
    return /[A-Z]/.test(value);
  };

  const onSubmit = async (data) => {
    try {
      (await type) === "login"
        ? onLogin(data)
            .unwrap()
            .then(() => {
              reset();
              navigate(paths.home);
            })
        : onRegister(data)
            .unwrap()
            .then(() => {
              reset();
              navigate(paths.home);
            });
    } catch (error) {
      alert("Прикрутить тостер!");
    }
  };

  const onChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  return (
    <>
    <Header />
<main className="min-h-[70vh] max-w-screen-xl m-auto pt-10 px-6">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg m-auto flex flex-col gap-4 mt-2">
        {type === "login" ? (
          <>
            <h1 className="text-4xl md:text-6xl text-center m-auto font-bold">Вход</h1>
            <p className="text-center text-text-main mt-6 max-w-3xl m-auto">
            После входа в систему вы соглашаетесь с нашими Условиями обслуживания и Политикой конфиденциальности. И становитесь ближе к новым эмоциям ✨
            </p>
              <input
                type="email"
                {...register("identifier", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 4,
                    message: "Минимум 4 символов",
                  },
                  validate: (value) =>
                    !isUpperCase(value) ||
                    "Только символы в верхнем регистре разрешены",
                })}
                name="identifier"
                onChange={onChange}
                id="identifier"
                value={user.identifier}
                placeholder="Ваш электронный адрес"
                className="block border my-2 px-5 py-4 rounded-md border-secondary-200 w-full"
              />
                {errors?.identifier && (
                        <div
                        className="px-5 py-3 border border-red-200 bg-red-100 rounded-md text-red-800"
                      >
                        {errors?.identifier?.message || "ERROR!"}
                      </div>
                )}
              <input
                type="password"
                {...register("password", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 5,
                    message: "Минимум 5 символов",
                  },
                })}
                value={user.password}
                name="password"
                onChange={onChange}
                id="password"
                placeholder="Ваш пароль"
                className="block border mt-2 mb-3 px-5 py-4 rounded-md border-secondary-200 w-full"
              />
                {errors?.password && (
                                <div
                                className="px-5 py-3 border border-red-200 bg-red-100 rounded-md text-red-800"
                              >
                  <p>{errors?.password?.message || "ERROR!"}</p>
                  </div>
                )}
          
              <button
                type="submit"
                className="bg-brand-green disabled:bg-gray-100 font-semibold px-10 py-3 text-white
                hover:bg-primary-400 disabled:text-text-main rounded-full w-fit mx-auto text-center"
              >
                Войти
              </button>
            <div className="text-lg decoration-primary-200 hover:decoration-primary-300 decoration-2 my-6 block text-center">
            Нет аккаунта?
            <button
              onClick={() => navigate(paths.register)}
              className="underline
              mt-8 text-green-600 ml-2"
            >
              Зарегистрироваться!
            </button>
            </div>
          </>
        ) : (
          <>
          <h1 className="text-4xl md:text-6xl text-center m-auto font-bold">Регистрация</h1>
          <p className="text-center text-text-main mt-6 max-w-3xl m-auto mb-10">
          При регистрации вы соглашаетесь с нашими Условиями обслуживания и Политикой конфиденциальности. И становитесь ближе к новым эмоциям ✨
          </p>
              <input
                type="text"
                {...register("username", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 5,
                    message: "Минимум 5 символов",
                  },
                })}
                name="username"
                onChange={onChange}
                id="username"
                value={user.username}
                placeholder="Ваше имя и фамилие"
                className="block border my-2 px-5 py-4 rounded-md border-secondary-200 w-full"
              />
                {errors?.username && (
                                   <div
                                   className="px-5 py-3 border border-red-200 bg-red-100 rounded-md text-red-800"
                                 >
                                   {errors?.username?.message || "ERROR!"}
                                 </div>
                )}
              <input
                type="email"
                {...register("email", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 5,
                    message: "Минимум 5 символов",
                  },
                  validate: (value) =>
                    !isUpperCase(value) ||
                    "Только символы в верхнем регистре разрешены",
                })}
                name="email"
                onChange={onChange}
                id="email"
                value={user.email}
                placeholder="Ваш электронный адрес"
                className="block border my-2 px-5 py-4 rounded-md border-secondary-200 w-full"
              />
                                    {errors?.email && (
                                     <div
                                     className="px-5 py-3 border border-red-200 bg-red-100 rounded-md text-red-800"
                                   >
                                    <p>{errors?.email?.message || "ERROR!"}</p>
                                 </div>
                                    )}

              <input
                type="password"
                {...register("password", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 5,
                    message: "Минимум 5 символов",
                  },
                })}
                value={user.password}
                name="password"
                onChange={onChange}
                id="password"
                placeholder="Ваш пароль"
                className="block border mt-2 mb-3 px-5 py-4 rounded-md border-secondary-200 w-full"
              />
              
                {errors?.password && (
                                <div
                                className="px-5 py-3 border border-red-200 bg-red-100 rounded-md text-red-800"
                              >
                  <p>{errors?.password?.message || "ERROR!"}</p>
                  </div>
                )}

              <button
                type="submit"
                className="bg-brand-green disabled:bg-gray-100 font-semibold px-10 py-3 text-white
                hover:bg-primary-400 disabled:text-text-main rounded-full w-fit mx-auto text-center"
              >
                Зарегистрироваться
              </button>
            <div className="text-lg decoration-primary-200 hover:decoration-primary-300 decoration-2 my-6 block text-center">
            Уже есть аккаунт?
            <button
              onClick={() => navigate(paths.login)}
              className="underline
              mt-8 text-green-600 ml-2"
            >
              Войти!
            </button>
            </div>
          </>
        )}
      </form>
    </main>
    </>
  );
};

Form.propTypes = {
  type: PropTypes.string,
};
