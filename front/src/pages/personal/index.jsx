import { Layout } from '@components/layout';
import { Banner } from '@components/personal/banner';
import { PersonalInfo } from '@components/personal/info';
import { About } from '@components/personal/about';
import { Statistic } from '@components/personal/statistic';
import { Subscribers } from '@components/personal/subscribers';
import { useCurrentQuery } from '@services/auth/authQuery';

export const Personal = () => {
  const { data } = useCurrentQuery();

  return (
    <Layout>
      <div className="m-auto h-full max-w-screen-xl px-6 py-8">
        <Banner />

        <div className="my-4 flex flex-col space-y-4 2xl:flex-row 2xl:space-x-4 2xl:space-y-0">
          <PersonalInfo info={data} />
          <div className="flex w-full flex-col 2xl:w-2/3">
            <About />
            <Statistic />
          </div>
        </div>
        <Subscribers />
      </div>
    </Layout>
  );
};
