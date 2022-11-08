import React from 'react';
import { render, screen } from '@testing-library/react';
import FormInputText from './FormInputText';

test('Renders FormInputText', () => {
  render(<FormInputText label="Title" name="title" type="text"/>);
  const linkElement = screen.getByRole("label");
  expect(linkElement).toHaveTextContent("Title");
});
