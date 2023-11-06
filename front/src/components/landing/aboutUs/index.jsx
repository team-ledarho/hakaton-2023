import { WatchStar } from '@components/icons';
import { useState } from 'react';
const AboutUs = () => {
  const [play, setPlay] = useState(false)

  return (
    <>
      <section className="m-auto mb-24 max-w-screen-xl px-6 py-24" id="aboutUs">
        <div className="md:flex md:justify-between">
          <div className="text-lg text-gray-800 md:mb-4 md:text-xl">
            ПРО НАС
          </div>
          <h2 className="rounded-md py-1 text-4xl font-bold text-secondary-700 md:px-2 md:text-6xl">
            НАША ПЛОЩАДКА АКТИВНО
          </h2>
        </div>

        <h2 className="mt-4 text-2xl font-bold text-secondary-700 md:text-6xl md:font-medium">
          <span className="rounded-md bg-brand-green px-2 text-white md:px-4">
            РАЗВИВАЕТСЯ
          </span>{' '}
          МЕЖРЕГИОНАЛЬНО
        </h2>

          <div className="relative mt-20 flex items-center justify-center max-h-[600px]">
        {!play ? (
          <>
          <img
            src="https://i.imgur.com/HVBwk5J.jpg"
            alt=""
            className="w-full rounded-xl lg:rounded-bl-[15rem] max-h-[600px]"
          />
          <div className="absolute inset-0 z-20 rounded-xl bg-[#597F9B] opacity-50 lg:rounded-bl-[15rem]" />
          <button className="absolute z-30 flex items-center justify-center text-center" onClick={() => setPlay(true)}>
            <p className="absolute bottom-auto top-auto z-20 text-white">
              Посмотреть
            </p>
            <WatchStar className="spin z-10 h-[100px] w-[100px] md:h-[170px] md:w-[170px]" />
          </button>
          </>
        ) : (
          <iframe
          className="w-full aspect-video lg:rounded-bl-[15rem]
          lg:hover:rounded-bl-xl rounded-xl transition-all max-h-[600px]"
          src="https://www.youtube.com/embed/1fueZCTYkpA?si=SHK7eLXT-IQ2Pfy-"
          title="промо"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
          gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
         )} 
        </div>
      </section>
    </>
  );
};

export default AboutUs;
