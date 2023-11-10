import { useState } from 'react';

export const useModal = () => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen((prev) => !prev);
  };

  return {
    open,
    onOpen,
  };
};
