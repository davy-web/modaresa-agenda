import React from 'react';
import { render, screen } from '@testing-library/react';
import FormButton from './FormButton';

test('Renders FormButton', () => {
  render(<FormButton label="Valider" />);
  const linkElement = screen.getByRole("button");
  expect(linkElement).toHaveTextContent("Valider");
});
