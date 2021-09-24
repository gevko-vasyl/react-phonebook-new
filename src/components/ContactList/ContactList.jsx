import React, { Component } from "react";
import ContactItem from "components/ContactList/ContactItem";

export default class ContactList extends Component {
  render() {
    const { contacts, onDelete } = this.props;
    // console.log(contacts);
    return (
      <div>
        <h2>Contacts</h2>

        <ul>
          {contacts.map(({ name, number }) => (
            <ContactItem
              key={number}
              name={name}
              number={number}
              onDelete={onDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}
