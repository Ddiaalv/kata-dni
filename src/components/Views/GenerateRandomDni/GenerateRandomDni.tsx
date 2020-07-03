import * as React from 'react';
import { useState } from 'react';
import './GenerateRandomDni.scss';
import { calculateDniLetter, stringOfRandomNumbers } from '../../../utils/utils';
import { PersonDefault, PersonProps } from './types';
import { DniCard } from '../../DniCard';

export const GenerateRandomDni: React.FC<{}> = () => {
  const [dni, setDni] = useState<string>('');
  const [person, setPerson] = useState<PersonProps>(PersonDefault);

  const generateRandomDni = () => {
    const limitDigits = 8;
    let provisionalDni = stringOfRandomNumbers(limitDigits);
    provisionalDni += calculateDniLetter(provisionalDni);
    setDni(provisionalDni);
  };

  const randomDni = () => {
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((result) => {
        setPerson(result.results[0]);
      })
      .then(generateRandomDni);
  };

  return (
    <div className="GenerateRandomDni">
      <h1>Random DNI aplication</h1>
      <button onClick={randomDni}>Random DNI</button>
      {dni !== '' ? (
        <DniCard
          firstName={person.name.first}
          lastName={person.name.last}
          gender={person.gender}
          date={person.dob.date}
          picture={person.picture.large}
          dni={dni}
        />
      ) : (
        ''
      )}
    </div>
  );
};

GenerateRandomDni.displayName = 'GenerateRandomDni';
