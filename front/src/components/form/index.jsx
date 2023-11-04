import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  useLoginMutation,
  useRegisterMutation,
} from '../../services/auth/authQuery';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../paths';

const initialUserLogin = { password: '', identifier: '' };
const initialUserRegister = { password: '', email: '', username: '' };

export const Form = ({ type }) => {
  const [user, setUser] = useState(
    type === 'login' ? initialUserLogin : initialUserRegister,
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
    mode: 'onBlur',
  });

  const isUpperCase = (value) => {
    // Функция для проверки, содержит ли строка символы в верхнем регистре
    return /[A-Z]/.test(value);
  };

  const onSubmit = async (data) => {
    try {
      (await type) === 'login'
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
      alert('Прикрутить тостер!');
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
      <main className="m-auto min-h-[70vh] max-w-screen-xl px-6 pt-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="m-auto mt-2 flex max-w-lg flex-col gap-4"
        >
          {type === 'login' ? (
            <>
              <h1 className="m-auto text-center text-4xl font-bold md:text-6xl">
                Вход
              </h1>
              <p className="m-auto mt-6 max-w-3xl text-center text-text-main">
                После входа в систему вы соглашаетесь с нашими Условиями
                обслуживания и Политикой конфиденциальности. И становитесь ближе
                к новым эмоциям ✨
              </p>
              <input
                type="email"
                {...register('identifier', {
                  required: 'Поле обязательно к заполнению',
                  minLength: {
                    value: 4,
                    message: 'Минимум 4 символов',
                  },
                  validate: (value) =>
                    !isUpperCase(value) ||
                    'Только символы в верхнем регистре разрешены',
                })}
                name="identifier"
                onChange={onChange}
                id="identifier"
                value={user.identifier}
                placeholder="Ваш электронный адрес"
                className="my-2 block w-full rounded-md border border-secondary-200 px-5 py-4"
              />
              {errors?.identifier && (
                <div className="rounded-md border border-red-200 bg-red-100 px-5 py-3 text-red-800">
                  {errors?.identifier?.message || 'ERROR!'}
                </div>
              )}
              <input
                type="password"
                {...register('password', {
                  required: 'Поле обязательно к заполнению',
                  minLength: {
                    value: 5,
                    message: 'Минимум 5 символов',
                  },
                })}
                value={user.password}
                name="password"
                onChange={onChange}
                id="password"
                placeholder="Ваш пароль"
                className="mb-3 mt-2 block w-full rounded-md border border-secondary-200 px-5 py-4"
              />
              {errors?.password && (
                <div className="rounded-md border border-red-200 bg-red-100 px-5 py-3 text-red-800">
                  <p>{errors?.password?.message || 'ERROR!'}</p>
                </div>
              )}

              <button
                type="submit"
                className="mx-auto w-fit rounded-full bg-brand-green px-10 py-3
                text-center font-semibold text-white hover:bg-primary-400 disabled:bg-gray-100 disabled:text-text-main"
              >
                Войти
              </button>
              <div className="my-6 block text-center text-lg decoration-primary-200 decoration-2 hover:decoration-primary-300">
                Нет аккаунта?
                <button
                  onClick={() => navigate(paths.register)}
                  className="ml-2
              mt-8 text-green-600 underline"
                >
                  Зарегистрироваться!
                </button>
              </div>
            </>
          ) : (
            <>
              <h1 className="m-auto text-center text-4xl font-bold md:text-6xl">
                Регистрация
              </h1>
              <p className="m-auto mb-10 mt-6 max-w-3xl text-center text-text-main">
                При регистрации вы соглашаетесь с нашими Условиями обслуживания
                и Политикой конфиденциальности. И становитесь ближе к новым
                эмоциям ✨
              </p>
              <input
                type="text"
                {...register('username', {
                  required: 'Поле обязательно к заполнению',
                  minLength: {
                    value: 5,
                    message: 'Минимум 5 символов',
                  },
                })}
                name="username"
                onChange={onChange}
                id="username"
                value={user.username}
                placeholder="Ваше имя и фамилие"
                className="my-2 block w-full rounded-md border border-secondary-200 px-5 py-4"
              />
              {errors?.username && (
                <div className="rounded-md border border-red-200 bg-red-100 px-5 py-3 text-red-800">
                  {errors?.username?.message || 'ERROR!'}
                </div>
              )}
              <input
                type="email"
                {...register('email', {
                  required: 'Поле обязательно к заполнению',
                  minLength: {
                    value: 5,
                    message: 'Минимум 5 символов',
                  },
                  validate: (value) =>
                    !isUpperCase(value) ||
                    'Только символы в верхнем регистре разрешены',
                })}
                name="email"
                onChange={onChange}
                id="email"
                value={user.email}
                placeholder="Ваш электронный адрес"
                className="my-2 block w-full rounded-md border border-secondary-200 px-5 py-4"
              />
              {errors?.email && (
                <div className="rounded-md border border-red-200 bg-red-100 px-5 py-3 text-red-800">
                  <p>{errors?.email?.message || 'ERROR!'}</p>
                </div>
              )}

              <input
                type="password"
                {...register('password', {
                  required: 'Поле обязательно к заполнению',
                  minLength: {
                    value: 5,
                    message: 'Минимум 5 символов',
                  },
                })}
                value={user.password}
                name="password"
                onChange={onChange}
                id="password"
                placeholder="Ваш пароль"
                className="mb-3 mt-2 block w-full rounded-md border border-secondary-200 px-5 py-4"
              />

              {errors?.password && (
                <div className="rounded-md border border-red-200 bg-red-100 px-5 py-3 text-red-800">
                  <p>{errors?.password?.message || 'ERROR!'}</p>
                </div>
              )}

              <button
                type="submit"
                className="mx-auto w-fit rounded-full bg-brand-green px-10 py-3
                text-center font-semibold text-white hover:bg-primary-400 disabled:bg-gray-100 disabled:text-text-main"
              >
                Зарегистрироваться
              </button>
              <div className="my-6 block text-center text-lg decoration-primary-200 decoration-2 hover:decoration-primary-300">
                Уже есть аккаунт?
                <button
                  onClick={() => navigate(paths.login)}
                  className="ml-2
              mt-8 text-green-600 underline"
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
