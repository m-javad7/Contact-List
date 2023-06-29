import React from 'react';
import { useState } from 'react';
import Contacts from './components/Contacts.jsx';
import ContactForm from './components/ContactForm';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };
 

  return (
    <div className='container mx-auto'>
      <h1 className="ml-2 font-semibold text-gray-500 dark:text-gray-400 text-center mb-5 mt-5">Contact List</h1>
      <ContactForm addContact={addContact} />      
      <Contacts contacts={contacts} />
    </div>
  );
};

export default App;
