import * as React from 'react';
import './ErrorMessage.scss';

interface ErrorMessageProps {
  text: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ text }) => (
  <div className="ErrorMessage" style={{ color: 'red' }}>
    {text}
  </div>
);

ErrorMessage.displayName = 'ErrorMessage';
