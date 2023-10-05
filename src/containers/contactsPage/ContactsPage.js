import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name, setName] = useState("");
 const [phone, setPhone] = useState("");
 const [email, setEmail] = useState("");
 const [isDuplicateName, setIsDuplicateName] = useState(false);

 const contacts = props.contacts;
 const addContact = props.onAdd;


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (!isDuplicateName) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    if (contacts) {
      let nameMatch = contacts.filter((item) => item.name === name);
      if (nameMatch && nameMatch.length > 0) {
        setIsDuplicateName(true);
      }
    }
  }, [name, contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={name} phone={phone} email={email}  setName={setName} setPhone={setPhone} setEmail={setEmail} handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={props.contacts}/>
      </section>
    </div>
  );
};
