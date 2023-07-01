import { Component } from "react";
import PropTypes from 'prop-types';

export class ContactForm extends Component {
    state = {
      name: '',
      number: '',
    };
  
    handleInputChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      const { name, number } = this.state;
  
      this.props.onAddContact(name, number);
  
      this.setState({ name: '', number: '' });
    };
  
    render() {
      const { name, number } = this.state;
      const { contacts } = this.props;
  
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <br />
          <label>
            Number:
            <input
              type="tel"
              name="number"
              value={number}
              onChange={this.handleInputChange}
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <br />
          <button type="submit" disabled={contacts.length === 0}>
            Add contact
          </button>
        </form>
      );
    }
  }

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
