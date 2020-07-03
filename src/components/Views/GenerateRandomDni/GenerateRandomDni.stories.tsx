import * as React from 'react';
import {GenerateRandomDni} from './GenerateRandomDni';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'GenerateRandomDni',
  decorators: [withA11y],
};

export const withText = () => <GenerateRandomDni />;
