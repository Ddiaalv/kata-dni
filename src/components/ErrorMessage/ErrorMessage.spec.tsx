import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ErrorMessage } from './';

describe('ErrorMessage', () => {
  it('should display the default message', () => {
    const text = 'Longitud incorrecta';
    const renderResult: RenderResult = render(
      <ErrorMessage text={'Longitud incorrecta'} />,
    );
    expect(renderResult.queryByText(text)).toBeTruthy();
  });
});
