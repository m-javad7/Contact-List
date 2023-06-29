import React, { useState, useEffect } from 'react';
import Contacts from './components/Contacts.jsx';
import ContactForm from './components/ContactForm';
import LocalStorageEffect from './hooks/useLocalStorage.js';

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <div className='container mx-auto'>
      <h1 className="ml-2 font-semibold text-gray-500 dark:text-gray-400 text-center mb-5 mt-5">Contact List</h1>
      <ContactForm addContact={addContact} />      
      <Contacts contacts={contacts} />
      <LocalStorageEffect contacts={contacts} />
    </div>
  );
};

export default App;
