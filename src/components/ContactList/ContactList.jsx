import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class ContactList extends Component {
    render() {
      const { contacts, onDeleteContact } = this.props;
  
      return (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
            </li>
          ))}
        </ul>
      );
    }
  }

  
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
