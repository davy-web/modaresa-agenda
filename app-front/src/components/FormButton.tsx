import React from 'react';
import './FormButton.css';

type FormButtonProps = {
  label: string
}

export default function FormButton({ label }: FormButtonProps) {
  return (
    <button role="button" className="form_button">{label}</button>
  );
}