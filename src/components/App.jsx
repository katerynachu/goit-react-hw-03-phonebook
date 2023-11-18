import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import {ContactList} from './ContactList/ContactList'
import  {ContactForm } from './ContactForm/ContactForm';
import { GlobalStyle } from './GlobalStyle/Globalstyle';
import { Titleh1,Titleh2 } from './App.styled';



const contactsKey = 'contact-key';
export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
  ]);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localContacts = window.localStorage.getItem(contactsKey);
    if (localContacts !== null) {
      setContacts(JSON.parse(localContacts));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(contactsKey, JSON.stringify(contacts));
  }, [contacts]);

  const updateContactList = (newValues) => {
    if (contacts.some((contact) => contact.name.toLowerCase() === newValues.name.toLowerCase())) {
      alert(`${newValues.name} is already in contacts`);
    } else {
      const newContact = {
        ...newValues,
        id: nanoid(),
      };

      setContacts((prevContacts) => [...prevContacts, newContact]);
    }
  };

  const updateContactFilter = (event) => {
    setFilter(event.target.value);
  };

  const deleteContactItem = (id) => {
    setContacts((prevContacts) => prevContacts.filter((item) => item.id !== id));
  };


  const filteredContactItems = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

    return (
      <div>
      <Titleh1>Phonebook</Titleh1>
      <ContactForm addContact={updateContactList} />
      <Titleh2>Contacts</Titleh2>
      <Filter title={'Find contact by name'} onUpdate={updateContactFilter} filter={filter} />
      <ContactList onDelete={deleteContactItem} contacts={filteredContactItems} />
      <GlobalStyle />
    </div>
    );
  }


