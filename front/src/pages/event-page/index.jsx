import { Layout } from '@components/layout';
import { useGetOneQuery } from '@services/events/eventsQuery';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import Comment from '@components/comment';
import ButtonShared from '@components/button-shared'

export const EventPage = () => {
  const params = useParams();
  const { data } = useGetOneQuery(params.slug);

  return (
    <Layout>
      {data && (
        <section className="relative mx-auto mb-20 max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <article>
            <div className="xl:divide-y">
              <header className="pt-6 xl:pb-6">
                <div className="text-center">
                  <p className="text-base font-medium leading-6 text-black">
                    {dayjs(data.data[0].attributes.start_date).format(
                      'MMMM D, HH:mm',
                    )}
                  </p>
                  <h1 className="md:leading-14 text-3xl font-extrabold uppercase leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl">
                    {data.data[0].attributes.name}
                  </h1>
                </div>
              </header>
              <div className="grid-rows-[auto_1fr] divide-y xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0">
                <dl className="pb-10 pt-6 text-center sm:text-left xl:border-b">
                  <dd>
                    <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                      <li className="flex items-center space-x-2">
                        <dl className="whitespace-nowrap text-sm font-medium leading-5">
                          <dt className="text-black">Организатор</dt>
                          <dd>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://twitter.com/Twitter"
                              className="text-primary-500 hover:text-primary-600"
                            >
                              {data.data[0].attributes?.organizer_name}
                            </a>
                          </dd>
                        </dl>
                      </li>
                    </ul>
                  </dd>
                </dl>
                <div className="divide-y xl:col-span-3 xl:row-span-2 xl:pb-0">
                  <div className="prose max-w-none pb-8 pt-10">
                    <p>{data.data[0].attributes.description}</p>
                  </div>
                  <div className="pb-6 pt-6 text-sm text-gray-700">
                    <ButtonShared />
                  </div>
                  <div
                    className="pb-6 pt-6 text-center text-gray-700"
                    id="comment"
                  >
                    <giscus-widget
                      id="comments-container"
                      repo="timlrx/tailwind-nextjs-starter-blog"
                      repoid="MDEwOlJlcG9zaXRvcnkzMjgxMjEyNjA="
                      category="Blog Comments"
                      categoryid="DIC_kwDOE467rM4B-XTQ"
                      mapping="pathname"
                      reactionsenabled="1"
                      emitmetadata="0"
                      theme="transparent_dark"
                      lang="en"
                      loading="lazy"
                      host="https://giscus.app"
                      strict="0"
                      inputposition="bottom"
                    ></giscus-widget>
                  </div>
                </div>
                <footer>
                  <div className="divide-gray-200 text-sm font-medium leading-5 xl:col-start-1 xl:row-start-2 xl:divide-y">
                    <dl className="pb-10 pt-6 xl:border-b">
                      <dd>
                        <ul className="flex flex-wrap gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                          <li className="flex items-center space-x-2">
                            <dl className="whitespace-nowrap text-sm font-medium leading-5">
                              <dt className="mb-2 text-black">Теги</dt>
                              <dd>
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href="https://twitter.com/Twitter"
                                  className="text-primary-500 hover:text-primary-600 "
                                >
                                  {data.data[0].attributes?.format}
                                </a>
                              </dd>
                              <dd>
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href="https://twitter.com/Twitter"
                                  className="text-primary-500 hover:text-primary-600 "
                                >
                                  {data.data[0].attributes?.location}
                                </a>
                              </dd>
                            </dl>
                          </li>
                        </ul>
                      </dd>
                    </dl>
                  </div>
                  <div className="pt-4 xl:pt-8">
                    <a
                      className="uppercase text-primary-500"
                      aria-label="Назад"
                      href="/events"
                    >
                      ← ОБРАТНО
                    </a>
                  </div>
                </footer>
              </div>
            </div>
            <Comment />
          </article>
          <button className="fixed bottom-2 left-0 right-0 m-auto max-w-5xl rounded-md bg-gray-800 p-4 uppercase text-white transition-colors duration-300 hover:bg-brand-green">
            УЧАСТВОВАТЬ
          </button>
        </section>
      )}
    </Layout>
  );
};

export default EventPage;
