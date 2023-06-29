import React, { useState } from 'react';

const ContactList = ({ contacts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) => {
    const { name, email, mobile } = contact;
    const lowerSearchTerm = searchTerm.toLowerCase();

    return (
      name.toLowerCase().includes(lowerSearchTerm) ||
      email.toLowerCase().includes(lowerSearchTerm) ||
      mobile.toLowerCase().includes(lowerSearchTerm)
    );
  });


  return (
    <div className='px-4 py-10'>
    <div class="relative w-60 my-0 mx-auto">
      <svg class="w-6 h-6 text-gray-700 absolute top-3 left-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
    <input
      type="search"
      placeholder="Search"
      value={searchTerm}
      onChange={handleSearch}
      class="border-b-2 w-full border-gray-200 py-3 px-7"
    />
  </div>

      <div className="flex items-center px-5 py-2 mb-4 bg-gray-300 rounded-lg font-bold">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
   </svg>
        <h2 className="flex-1">Name</h2>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
       <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
   </svg>
        <span className="flex-1">Mobile</span>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
      </svg>
        <span className="flex-1">Email</span>
      </div>

      {
      filteredContacts.map((contact, index) => (
        <div key={index} className="mb-4">
          <div className="hover:bg-gray-200 cursor-pointer bg-white shadow flex p-5 items-center mb-5 rounded-lg  text-gray-600 text-sm">
            <h2 className="flex-1 capitalize">{contact.name}</h2>
            <p className="flex-1 mb-1">{contact.mobile}</p>
            <p className="flex-1">{contact.email}</p>
          </div>
        </div>
      ))
      }
    </div>
  );
};

export default ContactList;



  
