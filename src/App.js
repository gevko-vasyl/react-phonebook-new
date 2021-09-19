import React, { Component } from "react";

import Title from "components/Title/Title";
import ContactForm from "components/ContactForm/ContactForm";
import Filter from "components/Filter/Filter";

import ContactList from "components/ContactList/ContactList";
import contactsData from "data/contacts.json";

export default class App extends Component {
  state = {
    contacts: [...contactsData],
    filter: "",
  };

  addContact = (e) => {
    const newContact = {
      name: e.target.name.value,
      number: e.target.number.value,
    };
    // console.log(newContact);
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilter = (e) => {
    const filterValue = e.target.value;
    this.setState({ filter: filterValue });
  };

  // showFilteredContacts = () => {
  //   const contacts = this.state.contacts;
  //   const names = contacts.map((contact) => contact.name);
  //   console.log(names);

  //   // console.log(filteredContacts);
  // };

  render() {
    const { contacts, filter } = this.state;
    // const filteredContacts = this.showFilteredContacts();

    return (
      <div>
        <Title />
        <ContactForm addContact={this.addContact} />
        <Filter onFilterChange={this.handleFilter} />
        <ContactList contacts={contacts}></ContactList>
      </div>
    );
  }
}
