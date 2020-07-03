import * as React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import { CalculateDniLetter } from './index';

describe('CalculateDniLetter', () => {
  it('should display the default message', () => {
    const text = 'Type your dni number';
    const renderResult: RenderResult = render(<CalculateDniLetter />);
    expect(renderResult.queryByText(text)).toBeTruthy();
  });

  it('should display the default message', () => {
    const { getByLabelText, getByText } = render(<CalculateDniLetter />);

    const input = getByLabelText('Type your dni number');
    fireEvent.change(input, { target: { value: '99999999' } });
    fireEvent.click(getByText('Get letter'));

    expect(getByText(/Su letra es: R/i)).toBeTruthy();
  });
});
