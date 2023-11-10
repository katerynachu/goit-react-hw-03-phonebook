import React from 'react';
import {List,ListItem,DeleteButton} from './ContactList.styled'
export const ContactList = ({contacts,onDelete}) =>{
    return (
        <List>
        {contacts.map(contact => (
          <ListItem key={contact.id}>
            {contact.name} : {contact.number}
            <DeleteButton onClick={() => onDelete(contact.id)}>delete</DeleteButton>
          </ListItem>
        ))}
      </List>
    )
}
