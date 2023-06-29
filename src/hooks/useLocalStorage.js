import React, { useEffect } from 'react';

const LocalStorage = ({ contacts }) => {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      localStorage.setItem('contacts', JSON.stringify(contacts));
    };

    window.onbeforeunload = handleBeforeUnload;

    return () => {
      window.onbeforeunload = null;
    };
  }, [contacts]);

  return null;
};

export default LocalStorage;
