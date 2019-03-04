import React from 'react';
import contacts from '../contacts.json';
import ContactItem from './ContactItem';

const ContactList = () => {
  const firstContacts = contacts.slice(0,5);

  return (
    firstContacts.map((contact,index) => {
      return <ContactItem contact={contact} key={index} />
    })
  );
}

export default ContactList;
