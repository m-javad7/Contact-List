import React, { useState } from 'react';
import Input from './Input';
const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = { name, mobile, email };
    addContact(contact);
    setName('');
    setMobile('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="px-4">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
      <Input
         placeholder="0912-345-6789"
          pattern="[0-9]{4}[0-9]{3}[0-9]{4}" required
        type="number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      </div>
      <div>
      <Input
      type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>
      </div>
      <button type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
       <div className='flex justify-between'>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
</svg>
        <span className='px-2'>Add Contact</span>
       </div>
      </button>

    </form>
  );
};

export default ContactForm;
