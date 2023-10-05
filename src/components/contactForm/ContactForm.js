import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
        <label htmlFor="name">Tel</label>
        <input id="tel" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <button type="submit">Add</button>
      </form>
    </>
  );
};

