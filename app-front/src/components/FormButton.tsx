import React from 'react';
import './FormButton.css';

type FormButtonProps = {
  labelle: string
}

export default function FormButton({ labelle }: FormButtonProps) {
  return (
    <button role="button" className="form_button">{labelle}</button>
  );
}