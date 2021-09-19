import React, { Component } from "react";

export default class ContactForm extends Component {
  state = { name: "", number: "" };

  handleNameChange = (e) => {
    const name = e.target.value;
    this.setState({ name: name });
  };

  handleNumberChange = (e) => {
    const number = e.target.value;
    this.setState({ number: number });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    this.props.addContact(e);
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleNameChange}
            value={name}
          />
          <label>Number</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.handleNumberChange}
            value={number}
          />
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
