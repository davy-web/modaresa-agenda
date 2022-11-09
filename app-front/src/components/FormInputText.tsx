import React from 'react';
import './FormInputText.css';

type FormButtonProps = {
  label: string,
  name: string,
  type: string
}

export default function FormInputText({ label, name, type }: FormButtonProps) {
  return (
    <>
      <label role="label" htmlFor={name} className="form_label">{label}</label><br />
      <input role="input" id={name} name={name} type={type} className="form_input mb-3 mt-2" />
    </>
  );
}