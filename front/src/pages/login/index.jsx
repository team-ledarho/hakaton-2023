import { Layout } from "@components/layout";
import { Form } from "../../components/form";

export const Login = () => {
  return (
    <Layout>
      <div className="flex items-center min-h-screen">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10 bg-white dark:bg-gray-800 p-5 rounded-md shadow-sm">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                Вход
              </h1>
              <p className="text-gray-400 dark:text-gray-400">
                Авторизируйтесь для доступа к контенту
              </p>
            </div>

            <Form type="login" />
          </div>
        </div>
      </div>
    </Layout>
  );
};
