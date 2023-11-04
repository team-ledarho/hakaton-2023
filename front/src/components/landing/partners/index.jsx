import { ChrLogo, Star } from '@components/icons';

const Partners = ({ classNameName }) => {
  return (
    <>
      <section
        className={`flex overflow-hidden bg-gray-800 py-8 ${classNameName}`}
      >
        <div className="moving flex items-center">
          <ChrLogo className="mx-6" />
          <Star className="mx-5 h-11 w-11" />
          <ChrLogo className="mx-6" />
          <Star className="mx-5 h-11 w-11" />
          <ChrLogo className="mx-6" />
          <Star className="mx-5 h-11 w-11" />
          <ChrLogo className="mx-6" />
          <Star className="mx-5 h-11 w-11" />
          <ChrLogo className="mx-6" />
          <Star className="mx-5 h-11 w-11" />
        </div>
        <div className="moving flex items-center">
          <ChrLogo className="mx-6" />
          <Star className="mx-5 h-11 w-11" />
          <ChrLogo className="mx-6" />
          <Star className="mx-5 h-11 w-11" />
          <ChrLogo className="mx-6" />
          <Star className="mx-5 h-11 w-11" />
          <ChrLogo className="mx-6" />
          <Star className="mx-5 h-11 w-11" />
          <ChrLogo className="mx-6" />
          <Star className="mx-5 h-11 w-11" />
        </div>
        <div className="moving flex items-center">
          <ChrLogo className="mx-6" />
          <Star className="mx-5 h-11 w-11" />
          <ChrLogo className="mx-6" />
          <Star className="mx-5 h-11 w-11" />
          <ChrLogo className="mx-6" />
          <Star className="mx-5 h-11 w-11" />
          <ChrLogo className="mx-6" />
          <Star className="mx-5 h-11 w-11" />
          <ChrLogo className="mx-6" />
          <Star className="mx-5 h-11 w-11" />
        </div>
      </section>
    </>
  );
};

export default Partners;
