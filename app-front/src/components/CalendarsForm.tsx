import React from 'react';
import FormButton from "../components/FormButton";
import FormInputText from "../components/FormInputText";
import './CalendarsForm.css';

type CalendarsFormProps = {
  title: string
}

export default function CalendarsForm({ title }: CalendarsFormProps) {
  return (
    <form className="container form_container my-5">
      <div className="row">
        <div className="col-md text_center">
          <h3 className="mb-4">{title}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md">
          <FormInputText label="Date" name="date" type="date"/><br />
        </div>
        <div className="col-md">
          <FormInputText label="Informations" name="informations" type="text"/><br />
        </div>
      </div>
      <FormButton label="Valider" />
    </form>
  );
}