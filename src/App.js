import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
 const [appointments, setAppointments] = useState([]);
 const [contacts, setContacts] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addContact = (name, phone, email) => {
    let contact = {
      name: name,
      phone: phone,
      email: email
    };
    setContacts((prev) => [...prev, contact]);
  };

  const addAppointment = (name, contact, date, time) => {
    let appointment = {
      name: name,
      contact: contact,
      date: date,
      time: time
    };
    setAppointments((prev) => [...prev, appointment]);
  };

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} onAdd={addContact }/> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage contacts={contacts} appointments={appointments} onAdd={addAppointment} /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
