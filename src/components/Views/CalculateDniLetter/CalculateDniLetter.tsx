import * as React from 'react';
import { useEffect, useState } from 'react';
import './CalculateDniLetter.scss';
import { calculateDniLetter, checkIfContainsOnlyNumbers } from '../../../utils/utils';
import { ErrorMessage } from '../../ErrorMessage';

export const CalculateDniLetter: React.FC<{}> = () => {
  const [pressedNumbers, setPressedNumbers] = useState<string>('');
  const [dniLetter, setDniLetter] = useState('');
  const [error, setError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<string>('');

  const getUserNumbers = (event: React.ChangeEvent<HTMLInputElement>) => {
    const pressedValue = event.target.value;
    if (pressedValue.length <= 8) {
      setPressedNumbers(pressedValue);
    }
    if (pressedValue.length > 8) {
      setError(true);
      setMessageError('Debe tener una longitud de 8 digitos');
    } else {
      setError(false);
    }
    setDniLetter('');
  };

  const getDniLetter = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (pressedNumbers.length === 8) {
      if (checkIfContainsOnlyNumbers(pressedNumbers)) {
        const letter = calculateDniLetter(pressedNumbers);
        setDniLetter(letter);
      } else {
        setError(true);
        setMessageError('No debe contener letras.');
      }
    } else {
      if (!checkIfContainsOnlyNumbers(pressedNumbers)) {
        setError(true);
        setMessageError('No debe contener letras y tener una longitud de 8 digitos.');
      } else {
        setError(true);
        setMessageError('Debe tener una longitud de 8 digitos.');
      }
    }
  };

  useEffect(() => {
    if (!checkIfContainsOnlyNumbers(pressedNumbers) && pressedNumbers !== '') {
      setError(true);
      setMessageError('No debe contener letras.');
    }
  }, [pressedNumbers]);

  return (
    <div className="CalculateDniLetter">
      <form>
        <label>
          Type your dni number
          <input
            type="text"
            aria-label={'input-form'}
            id="dniNumbers"
            onChange={getUserNumbers}
          />
          {error ? <ErrorMessage text={messageError} /> : ''}
        </label>
        <button onClick={getDniLetter} disabled={error}>
          Get letter
        </button>
        {!error && dniLetter !== '' ? (
          <p style={{ color: 'green' }}>Su letra es: {dniLetter}</p>
        ) : (
          ''
        )}
      </form>
    </div>
  );
};

CalculateDniLetter.displayName = 'CalculateDniLetter';
