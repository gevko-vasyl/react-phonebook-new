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
    if (!this.preventDuplicateContact(newContact)) {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(({ number }) => number !== id),
    }));
  };

  preventDuplicateContact = (newContact) => {
    const normalizedNewContactName = newContact.name.toLowerCase();
    const newContactNumber = newContact.number;
    const contatcsNamesArray = this.state.contacts.map((el) =>
      el.name.toLowerCase()
    );
    const contatcsNumbersArray = this.state.contacts.map((el) => el.number);

    const isDuplicate =
      contatcsNamesArray.includes(normalizedNewContactName) ||
      contatcsNumbersArray.includes(newContactNumber);
    if (isDuplicate) {
      alert("Duplicate contact");
    }
    return isDuplicate;
  };

  handleFilter = (e) => {
    const filterValue = e.target.value;
    this.setState({ filter: filterValue });
  };

  showFiltered = () => {
    const { filter, contacts } = this.state;
    const normalize = filter.toLowerCase();
    const filteredContacts = contacts.filter((el) =>
      el.name.toLowerCase().includes(normalize)
    );
    return filteredContacts;
  };

  render() {
    const visibleContacts = this.showFiltered();

    this.showFiltered();
    return (
      <div>
        <Title />
        <ContactForm addContact={this.addContact} />
        <Filter onFilterChange={this.handleFilter} />
        <ContactList
          contacts={visibleContacts}
          onDelete={this.deleteContact}
        ></ContactList>
      </div>
    );
  }
}
