import {WatchStar} from '@components/icons'
const AboutUs = () => {
  return (
    <>
<section className="px-6 max-w-screen-xl m-auto py-24 mb-24" id="aboutUs">
  <div className="md:flex md:justify-between">
    <div className="text-gray-800 text-lg md:text-xl md:mb-4">ПРО НАС</div>
    <h2
      className="text-4xl md:text-6xl font-bold md:px-2 py-1 text-secondary-700 rounded-md"
    >
      НАША ПЛОЩАДКА АКТИВНО
    </h2>
  </div>

  <h2
    className="text-4xl md:text-6xl font-bold md:font-medium text-secondary-700 mt-4"
  >
    <span className="px-2 md:px-4 bg-brand-green text-white rounded-md"
      >РАЗВИВАЕТСЯ</span
    > МЕЖРЕГИОНАЛЬНО
  </h2>

  <div className="mt-20 flex justify-center items-center relative">
  <img
        src="https://i.imgur.com/HVBwk5J.jpg"
        alt=""
        className="w-full lg:rounded-bl-[15rem] rounded-xl"
      />
      <div
        className="absolute inset-0 bg-[#597F9B] opacity-50 lg:rounded-bl-[15rem] rounded-xl z-20"
      />
      <button
        className="text-center absolute z-30 flex justify-center items-center"
      >
                <p className='text-white absolute top-auto bottom-auto z-20'>Посмотреть</p>
        <WatchStar className="h-[100px] w-[100px] md:h-[170px] md:w-[170px] spin z-10" />
      </button>
      {/* <iframe
        className="w-full aspect-video lg:rounded-bl-[15rem]
        lg:hover:rounded-bl-xl rounded-xl transition-all"
        src="https://www.youtube.com/embed/5OAzOoMlUQM?si=GOnjbiEOblz_XtgT"
        title="промо"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture; web-share"
        allowfullscreen
      /> */}
  </div>
</section>
    </>
  )
}

export default AboutUs;