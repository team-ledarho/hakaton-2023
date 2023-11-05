import { TelegramIcon, VkIcon, CopyIcon } from '@components/icons';

function ButtonShared() {
  const _textTelegram = 'Очень интересная новость';

  const copyCurrentURLToClipboard = () => {
    const currentURL = window.location.href; // Получаем текущий URL-адрес страницы
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentURL).then(() => {
        console.log('URL скопирован в буфер обмена: ' + currentURL);
      }).catch((error) => {
        console.error('Не удалось скопировать URL: ' + error);
      });
    }
  };

  return (
    <div className='w-32 h-18 border-blue-800 border-2 rounded-lg md:w-40 xl:w-52 duration-300'>
      <h1 className='h-12 flex pl-3 items-center md:w-12'>Поделиться:</h1>
      <div className=' flex flex-wrap w-full flex-1 justify-start'>
        <a target='_blank' href={`https://t.me/share/url?url=${window.location.href}&text=${_textTelegram}`} rel="noreferrer">
          <TelegramIcon className={'flex-1 border-3 m-2 hover:fill-telega duration-300 cursor-pointer'} />
        </a>
        <a href={`https://vk.com/share.php?url=${window.location.href}`} target="_blank" rel="noreferrer">
          <VkIcon className={'flex-1 border-3 m-2 hover:fill-vk duration-300 cursor-pointer'} />
        </a>
        <button onClick={copyCurrentURLToClipboard}>
          <CopyIcon className={'flex-1 border-3 m-2 scale-75 cursor-pointer'} />
        </button>
      </div>
    </div>
  );
}

export default ButtonShared;
