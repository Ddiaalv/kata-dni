import * as React from 'react';
import {CalculateDniLetter} from './CalculateDniLetter';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'CalculateDniLetter',
  decorators: [withA11y],
};

export const withText = () => <CalculateDniLetter />;
