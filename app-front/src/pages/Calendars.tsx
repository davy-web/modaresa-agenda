import React from 'react';
import '../styles/bootstrap-grid.min.css';
import FormButton from "../components/FormButton";
import FormInputText from "../components/FormInputText";

export default function Calendars() {
  return (
    <>
      <h1>Calendars</h1>
      <FormInputText label="Title" name="title" type="text"/><br />
      <FormButton label="Valider" />
    </>
  );
}