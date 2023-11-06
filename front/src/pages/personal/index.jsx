import { Layout } from '@components/layout';
import { Banner } from '@components/personal/banner';
import { PersonalInfo } from '@components/personal/info';
import { About } from '@components/personal/about';
import { Subscribers } from '@components/personal/subscribers';
import { useCurrentQuery } from '@services/auth/authQuery';
import Header from '@components/header';

export const Personal = () => {
  const { data } = useCurrentQuery();

  return (
    <Layout>
      <Header />
      <div className="m-auto h-full max-w-screen-xl py-8">
        <Banner info={data} />

        <div className="my-4 flex flex-col space-y-4 2xl:flex-row 2xl:space-x-4 2xl:space-y-0">
          <PersonalInfo info={data} />
          <div className="flex w-full flex-col 2xl:w-2/3">
            <About />
          </div>
        </div>
        <Subscribers />
      </div>
    </Layout>
  );
};
