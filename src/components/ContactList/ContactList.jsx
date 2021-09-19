import React, { Component } from "react";
import ContactItem from "components/ContactList/ContactItem";

export default class ContactList extends Component {
  render() {
    const { contacts } = this.props;
    // console.log(contacts);
    return (
      <div>
        <h2>Contacts</h2>

        <ul>
          {contacts.map(({ name, number }) => (
            <ContactItem key={number} name={name} number={number} />
          ))}
        </ul>
      </div>
    );
  }
}
