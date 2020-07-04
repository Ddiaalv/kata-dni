import * as React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import { CalculateDniLetter } from './index';

describe('CalculateDniLetter', () => {
  const labelText = 'Type your dni number';

  it('should render the component', () => {
    const renderResult: RenderResult = render(<CalculateDniLetter />);
    expect(renderResult.queryByText(labelText)).toBeTruthy();
  });

  it('should display the correct dni letter', () => {
    const { getByLabelText, getByText } = render(<CalculateDniLetter />);

    const input = getByLabelText(labelText);
    fireEvent.change(input, { target: { value: '99999999' } });
    fireEvent.click(getByText('Get letter'));

    expect(getByText(/Su letra es: R/i)).toBeTruthy();
  });

  it('should show a message error if the user type a letter', () => {
    const { getByLabelText, getByText } = render(<CalculateDniLetter />);

    const textForTest = ['a', 'b123', '123c', 'e1234567', '1234567d', '123e4567'];
    const errorMessageText = /No debe contener letras/i;

    const input = getByLabelText(labelText);
    textForTest.forEach((text) => {
      fireEvent.change(input, { target: { value: text } });
      expect(getByText(errorMessageText)).toBeTruthy();
      expect(getByText('Get letter')).toHaveProperty('disabled', true);
    });
  });

  it('should show a message error if the user type number lower or greater than 8', () => {
    const { getByLabelText, getByText } = render(<CalculateDniLetter />);

    const errorMessageText = /Debe tener una longitud de 8 digitos/i;
    const input = getByLabelText(labelText);

    const textForTestLower = '12345';
    fireEvent.change(input, { target: { value: textForTestLower } });
    fireEvent.click(getByText('Get letter'));
    expect(getByText('Get letter')).toHaveProperty('disabled', true);
    expect(getByText(errorMessageText)).toBeTruthy();

    const textForTestGreater = '1234567890';
    fireEvent.change(input, { target: { value: textForTestGreater } });
    expect(getByText(errorMessageText)).toBeTruthy();
    expect(getByText('Get letter')).toHaveProperty('disabled', true);
  });
});
