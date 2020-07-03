import * as React from 'react';
import { DniCard } from './DniCard';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'DniCard',
  decorators: [withA11y],
};

export const Default = () => (
  <DniCard
    firstName={'Salvador'}
    lastName={'Arias'}
    gender={'male'}
    date={'1949-08-30'}
    picture={'https://randomuser.me/api/portraits/men/64.jpg'}
    dni={'28832829-M'}
  />
);
