import { useState, useEffect, useMemo, useCallback } from 'react';
import dayjs from 'dayjs';
import { debounce } from 'lodash';
import { Layout } from '@components/layout';
import { Users } from '@components/icons';
import ScrollToTopButton from '@components/scroll-up';
import { useNavigate } from 'react-router-dom';
import Header from '@components/header';
import { Calendar } from '@components/icons';
import { onOpen } from '@services/slices/popupSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '@components/modal';
import { getEvents, selectorEvents } from '../../services/slices/eventSlice';
import { useEvents } from '../../hooks/events/useEvents';
// import { useGetEventsQuery } from '../../services/api.service';

export const Events = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [formatFilter, setFormatFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch()

  const { events } = useEvents()
  console.log(events)

  useEffect(() => {
    dispatch(getEvents())
  }, [])

  const data = []
  const error = ""
  const refetch = () => console.log(1)

  const debouncedSearch = debounce((value) => setSearchQuery(value), 300);

  const [hasMoreData, setHasMoreData] = useState(true);

  const appendEvents = useCallback((newEvents) => {
    // setEvents((prevEvents) => [...prevEvents, ...newEvents]);
  }, []);

  const onModal = () => {
    dispatch(onOpen())
  }

  useEffect(() => {
    if (data && data.data) {
      if (data.data.length === 0) {
        setHasMoreData(false);
      } else {
        appendEvents(data.data);
      }
    }
  }, [data, appendEvents]);

  const filteredEvents = useMemo(() => {
    if (error) {
      return [];
    }

    return events?.filter((event) => {
      const eventDate = dayjs(event.start.dateTime).format('YYYY-MM-DD');
      return (
        event.summary.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (!cityFilter || event.start.timeZone === cityFilter) &&
        (!dateFilter || eventDate === dateFilter) &&
        (!formatFilter || event.eventType === formatFilter)
      );
    });
  }, [events, searchQuery, cityFilter, dateFilter, formatFilter, error]);

  const moreEvents = () => {
    if (hasMoreData) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    refetch();
  }, [cityFilter, dateFilter, formatFilter, currentPage, refetch]);


  return (
    <>
      <Modal />
      <Layout>
        <Header />
        <section
          className="relative m-auto mb-24 max-w-screen-xl px-6 py-24"
          id="aboutUs"
        >
          <div className="md:flex md:justify-between">
            <div className="text-lg text-gray-800 md:mb-4 md:text-xl">
              МЕРОПРИЯТИЯ
            </div>
            <h2 className="rounded-md py-1 text-4xl font-bold text-secondary-700 md:px-2 md:text-6xl">
              НА БЛИЖАЙШИЕ ДНИ
            </h2>
          </div>
          <h2 className="mt-4 text-2xl font-bold text-secondary-700 md:text-6xl md:font-medium">
            <span className="rounded-md bg-brand-green px-2 text-white md:px-4">
              УЧАСТВУЙ
            </span>{' '}
            ДЛЯ НОВЫХ ОТКРЫТИЙ
          </h2>
          <hr className="mt-4 rounded-xl border-2 border-brand-dark" />
          <div className="mt-10 block w-full md:hidden">
            <div className="sticky top-5 w-full">
              <div className="flex flex-col">
                <div className="w-full rounded-xl bg-white p-6">
                  <form>
                    <div className="relative mb-10 flex w-full items-center justify-between rounded-md">
                      <svg
                        className="absolute left-2 block h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24" А
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="11" cy="11" r="8" className=""></circle>
                        <line
                          x1="21"
                          y1="21"
                          x2="16.65"
                          y2="16.65"
                          className=""
                        ></line>
                      </svg>
                      <input
                        type="text"
                        name="search"
                        className="h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        placeholder="Поиск по названию"
                        onChange={(e) => debouncedSearch(e.target.value)}
                      />
                    </div>

                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <label
                          htmlFor="manufacturer"
                          className="text-sm font-medium text-stone-600"
                        >
                          Город
                        </label>
                        <select
                          value={cityFilter}
                          onChange={(e) => setCityFilter(e.target.value)}
                          id="manufacturer"
                          className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        >
                          <option>Москва</option>
                          <option>Грозный</option>
                        </select>
                      </div>

                      <div className="flex flex-col">
                        <label
                          htmlFor="date"
                          className="text-sm font-medium text-stone-600"
                        >
                          Дата
                        </label>
                        <input
                          onChange={(e) => setDateFilter(e.target.value)}
                          value={dateFilter}
                          type="date"
                          id="date"
                          className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label
                          htmlFor="status"
                          className="text-sm font-medium text-stone-600"
                        >
                          Формат
                        </label>
                        <select
                          value={formatFilter}
                          onChange={(e) => setFormatFilter(e.target.value)}
                          id="status"
                          className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        >
                          <option>Очное</option>
                          <option>Удалённое</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-6 grid w-full justify-end space-x-4 md:flex">
                      <button
                        className="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring"
                        onClick={() => {
                          setCityFilter('');
                          setDateFilter('');
                          setFormatFilter('');
                        }}
                      >
                        Сбросить
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-4 flex flex-row gap-4">
            <div className="flex w-full flex-col md:w-[60%]">
              {data &&
                filteredEvents?.map((event, index) => (
                  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                  <div
                    className="mr-auto mt-10 h-full max-w-6xl cursor-pointer w-full"
                    key={index}
                  >
                    <article className="flex flex-col gap-4 md:max-w-none">
                      <figure className="relative">
                        <div className='relative'>
                          <img
                            className="h-[300px] w-full rounded-lg object-cover"
                            src={ ""
                              // !event.attributes.photo.data
                              //   ? `https://preview.cruip.com/open-pro/images/blog-post-01.jpg`
                              //   : import.meta.env.VITE_STRAPI_URL +
                              //   event.attributes.photo.data?.attributes.url
                            }
                            width="540"
                            height="303"
                            alt="Blog post"
                            onClick={() => navigate(`/events/${event.attributes.slug}`)}
                          />
                          <div onClick={onModal} className='absolute cursor-pointer top-2 right-2 rounded-lg bg-white w-12 h-12'>
                            <Calendar />
                          </div>
                        </div>
                      </figure>
                      <div>
                        <header>
                          <div className="mb-3">
                            <ul className="-m-1 flex flex-wrap text-xs font-medium">
                              <li onClick={() => navigate(`/events/${event.attributes.slug}`)} className="m-1">
                                <a
                                  className="inline-flex rounded-full bg-purple-600 px-3 py-1 text-center text-gray-100 transition duration-150 ease-in-out hover:bg-purple-700"
                                  href="#0"
                                >
                                  {event.eventType}
                                </a>
                              </li>
                              <li className="m-1">
                                <a
                                  className="inline-flex rounded-full bg-blue-500 px-3 py-1 text-center text-gray-100 transition duration-150 ease-in-out hover:bg-blue-600"
                                  href="#0"
                                >
                                  {event.start.timeZone}
                                </a>
                              </li>
                            </ul>
                          </div>
                          <h3 className="mb-2 line-clamp-3 text-xl font-bold leading-tight lg:text-2xl">
                            {event.summary}
                          </h3>
                        </header>
                        <p className="line-clamp-3 flex-grow overflow-hidden text-lg text-gray-400">
                          {/* {event.attributes.description} */}
                        </p>
                        <footer className="mt-4 flex flex-row items-center">
                          <Users className="h-6 w-6" />
                          <span className="ml-4 mr-2 text-gray-700">0 - </span>
                          <span className="text-gray-500">
                            {dayjs(event.start.dateTime).format(
                              'MMMM D, HH:mm',
                            )}
                          </span>
                        </footer>
                      </div>
                    </article>
                  </div>
                ))}
              <button className='w-full mt-20 p-4 bg-brand-dark rounded-lg uppercase text-white hover:bg-brand-green transition-colors duration-200' onClick={moreEvents}>Ещё</button>
            </div>
            <div className="mt-10 hidden max-w-[30%] md:block">
              <div className="sticky top-5 w-full">
                <div className="flex flex-col">
                  <div className="w-[35vw] rounded-xl bg-white p-6">
                    <form>
                      <div className="relative mb-10 flex w-full items-center justify-between rounded-md">
                        <svg
                          className="absolute left-2 block h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="11" cy="11" r="8" className=""></circle>
                          <line
                            x1="21"
                            y1="21"
                            x2="16.65"
                            y2="16.65"
                            className=""
                          ></line>
                        </svg>
                        <input
                          type="text"
                          name="search"
                          className="h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                          placeholder="Поиск по названию"
                          onChange={(e) => debouncedSearch(e.target.value)}
                        />
                      </div>

                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col">
                          <label
                            htmlFor="manufacturer"
                            className="text-sm font-medium text-stone-600"
                          >
                            Город
                          </label>
                          <select
                            value={cityFilter}
                            onChange={(e) => setCityFilter(e.target.value)}
                            id="manufacturer"
                            className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                          >
                            <option>Москва</option>
                            <option>Грозный</option>
                          </select>
                        </div>

                        <div className="flex flex-col">
                          <label
                            htmlFor="date"
                            className="text-sm font-medium text-stone-600"
                          >
                            Дата
                          </label>
                          <input
                            onChange={(e) => setDateFilter(e.target.value)}
                            value={dateFilter}
                            type="date"
                            id="date"
                            className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                          />
                        </div>

                        <div className="flex flex-col">
                          <label
                            htmlFor="status"
                            className="text-sm font-medium text-stone-600"
                          >
                            Формат
                          </label>
                          <select
                            value={formatFilter}
                            onChange={(e) => setFormatFilter(e.target.value)}
                            id="status"
                            className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                          >
                            <option>Очное</option>
                            <option>Удалённое</option>
                          </select>
                        </div>
                      </div>

                      <div className="mt-6 grid w-full justify-end space-x-4 md:flex">
                        <button
                          className="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring"
                          onClick={() => {
                            setCityFilter('');
                            setDateFilter('');
                            setFormatFilter('');
                          }}
                        >
                          Сбросить
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ScrollToTopButton to="aboutUs" />
        </section>
      </Layout>
    </>
  );
};
