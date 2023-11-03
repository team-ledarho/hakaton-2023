import React from "react";
import { useForm } from "react-hook-form";
import {
  useLoginMutation,
  useRegisterMutation,
} from "../../services/auth/authQuery";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { paths } from "../../paths";

const initialUserLogin = { password: "", identifier: "" };
const initialUserRegister = { password: "", email: "", username: "" };

export const Form = ({ type }) => {
  const [user, setUser] = React.useState(
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
    <div className="m-7">
      <form onSubmit={handleSubmit(onSubmit)}>
        {type === "login" ? (
          <>
            <div className="mb-6">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                Email
              </label>
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
                placeholder="expample@gmail.com"
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
              <div className="text-red-500 text-[14px] h-1">
                {errors?.identifier && (
                  <p>{errors?.identifier?.message || "ERROR!"}</p>
                )}
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                Password
              </label>
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
                placeholder="password"
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
              <div className="text-red-500 text-[14px] h-1">
                {errors?.password && (
                  <p>{errors?.password?.message || "ERROR!"}</p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <button
                type="submit"
                className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 hover:outline-none"
              >
                Send Message
              </button>
            </div>
            <p
              onClick={() => navigate(paths.register)}
              className="text-base text-center text-gray-400 cursor-pointer"
            >
              Нет аккаунта?
            </p>
          </>
        ) : (
          <>
            <div className="mb-6">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                Username
              </label>
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
                placeholder="username"
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
              <div className="text-red-500 text-[14px] h-1">
                {errors?.username && (
                  <p>{errors?.username?.message || "ERROR!"}</p>
                )}
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                Email
              </label>
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
                placeholder="expample@gmail.com"
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
              <div className="text-red-500 text-[14px] h-1">
                {errors?.email && <p>{errors?.email?.message || "ERROR!"}</p>}
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                Password
              </label>
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
                placeholder="password"
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
              <div className="text-red-500 text-[14px] h-1">
                {errors?.password && (
                  <p>{errors?.password?.message || "ERROR!"}</p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <button
                type="submit"
                className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 hover:outline-none"
              >
                Send Message
              </button>
            </div>
            <p
              onClick={() => navigate(paths.login)}
              className="text-base text-center text-gray-400 cursor-pointer"
            >
              Есть аккаунт?
            </p>
          </>
        )}
      </form>
    </div>
  );
};

Form.propTypes = {
  type: PropTypes.string,
};
