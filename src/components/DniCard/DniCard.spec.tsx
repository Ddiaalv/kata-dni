import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { DniCard } from './';

describe('DniCard', () => {
  it('should display the default message', () => {
    const { queryByText } = render(
      <DniCard
        date={'03/07/2020'}
        dni={'24242424'}
        picture={''}
        gender={'M'}
        lastName={'Diaz'}
        firstName={'David'}
      />,
    );
    expect(queryByText('Nombre: David')).toBeTruthy();
  });
});
