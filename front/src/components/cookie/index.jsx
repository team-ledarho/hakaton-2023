import { useState, useEffect } from 'react';

const Cookie = () => {
  const COOKIE_NOTICE_DISMISSED = 'cookie_notice_dismissed';
  const [dismissed, setDismissed] = useState(true);

  const dismiss = () => {
    localStorage.setItem(COOKIE_NOTICE_DISMISSED, 'false');
    setDismissed(true);
  };

  useEffect(() => {
    const isDismissed = localStorage.getItem(COOKIE_NOTICE_DISMISSED) === 'false';
    setDismissed(isDismissed);
  }, []);

  return ( 
    <>
    <div className={`fixed inset-x-0 bottom-0 pb-2 sm:pb-5 z-50 ${dismissed ? 'opacity-0 transform translate-y-4' : 'transition-opacity ease-in-out duration-500'}`}>
      {dismissed ? null : (
        <div className="mx-auto max-w-screen-xl px-2 sm:px-0 lg:px-0">
          <div className="rounded-lg bg-gray-800 p-2 shadow-lg sm:p-3">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex w-0 flex-1 items-center">
                <span className="flex rounded-lg bg-brand-green p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-6 w-6 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
                        </span>
                <p className="ml-3 truncate font-medium text-white">
                  <span className="inline">Продолжая использовать данный сайт, вы соглашаетесь на использование файлов Cookie</span>
                </p>
              </div>
              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                <button onClick={dismiss} type="button" className="-mr-1 flex rounded-md p-2 hover:bg-brand-green focus:outline-none focus:ring-2 focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-6 text-white"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                  </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
    );
};

export default Cookie;
