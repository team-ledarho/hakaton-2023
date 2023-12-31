import { useState } from 'react';
import { useCurrentQuery, useUpdateMutation } from '@services/auth/authQuery';
import { EditIcon, SaveIcon } from '../../icons';
import toast from 'react-hot-toast';

export const About = () => {
  const [onUpdate] = useUpdateMutation();
  const { data } = useCurrentQuery();

  const [profile, setProfile] = useState({
    id: data.id,
    about_me: data.about_me,
  });
  const [user, setUser] = useState(data);
  const [edit, setEdit] = useState(false);

  const onChange = ({ target }) => {
    const { name, value } = target;
    setProfile((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const onEdit = () => {
    setEdit((prev) => !prev);
  };

  const onSubmit = async () => {
    try {
      await toast.promise(
        onUpdate(profile)
          .unwrap()
          .then((updateData) => {
            setEdit((prev) => !prev);
            setUser(updateData);
          }),
        {
          loading: 'Загрузка...',
          success: <b>Данные успешно обновлены!</b>,
          error: <b>Ошибка обновлении данных</b>,
        },
      );
    } catch (error) {
      toast.error('Что-то пошло не так');
    }
  };

  return (
    <>
      {data && (
        <div className="flex-1 rounded-lg bg-white p-8 shadow-xl">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-bold text-gray-900">О себе</h4>
            <div className="flex gap-5">
              {edit && (
                <button onClick={() => onSubmit()}>
                  <SaveIcon className="h-5 w-5 cursor-pointer" />
                </button>
              )}
              {data.id === profile.id && (
                <button onClick={onEdit}>
                  <EditIcon className="h-5 w-5 cursor-pointer" />
                </button>
              )}
            </div>
          </div>
          {edit ? (
            <textarea
              value={profile.about_me}
              onChange={onChange}
              name="about_me"
              className="my-4 w-full rounded-lg border-gray-300 bg-transparent px-4 py-1 text-gray-900 focus:outline-none"
            />
          ) : (
            <p
              style={{ color: user.about_me === null && '#929191' }}
              className="mt-2 text-gray-700"
            >
              {user.about_me === null ? 'Не заполнено' : user.about_me}
            </p>
          )}
        </div>
      )}
    </>
  );
};
