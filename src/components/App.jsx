import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import {ContactList} from './ContactList/ContactList'
import  {ContactForm } from './ContactForm/ContactForm';
import { GlobalStyle } from './GlobalStyle/Globalstyle';
import { Titleh1,Titleh2 } from './App.styled';



const contactsKey = 'contact-key';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  
  componentDidMount(){
    const localConatcts = window.localStorage.getItem(contactsKey);
    if(localConatcts !== null){
      this.setState({
        contacts:JSON.parse(localConatcts)
      })
    }
  }
  componentDidUpdate(prevProps,prevState){
    if(prevState.contacts !== this.state.contacts){
      window.localStorage.setItem(contactsKey,JSON.stringify(this.state.contacts))
    }
  }
  updateContactList = (newValues) => {
    if (this.state.contacts.some(contact => contact.name.toLowerCase() === newValues.name.toLowerCase())) {
      alert(`${newValues.name} is already in contacts`);
    } else {
      const newContact = {
        ...newValues,
        id: nanoid(),
      };
  
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  updateContactFilter = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  deleteContactItem = (id)=>{
      this.setState(prevState => {
        return {
          contacts: prevState.contacts.filter(item => item.id !== id),
        };
      });
  }
  render() {
    const { contacts, filter } = this.state;
    const filteredContactItems = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <Titleh1>Phonebook</Titleh1>
        <ContactForm addContact={this.updateContactList}/>
        <Titleh2>Contacts</Titleh2>
        <Filter
        title={'Find contact by name'}
          onUpdate={this.updateContactFilter}
          filter={this.state.filter}
        />
      <ContactList onDelete={this.deleteContactItem} contacts={filteredContactItems}/>
      <GlobalStyle/>
      </div>
    );
  }
}
export default App;
