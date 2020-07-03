import * as React from 'react';
import { ErrorMessage } from './ErrorMessage';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'ErrorMessage',
  decorators: [withA11y],
};

export const withText = () => <ErrorMessage text={'Longitud incorrecta'} />;
