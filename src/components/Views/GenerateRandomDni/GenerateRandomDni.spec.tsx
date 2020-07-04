import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { GenerateRandomDni } from './index';

describe('GenerateRandomDni', () => {
  it('should renderize the component', () => {
    const title = 'Random DNI aplication';
    const renderResult: RenderResult = render(<GenerateRandomDni />);
    expect(renderResult.queryByText(title)).toBeTruthy();
  });
});
