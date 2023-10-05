import React from "react";

export const ContactPicker = ({contacts, value, name, onChange}) => {

  const contactList = contacts.map((contact) => <option value={contact.name} key={contact.name}>{contact.name}</option>);

  return (
    <select onChange={onChange} value={value} name={name}>
        <option value="" key={-1}>No contact selected</option>
        {contactList}
    </select>
  );
};
