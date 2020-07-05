import * as React from 'react';
import { useState } from 'react';
import './GenerateRandomDni.scss';
import { generateRandomDni } from '../../../utils/utils';
import { PersonDefault, PersonProps } from './types';
import { DniCard } from '../../DniCard';

export const GenerateRandomDni: React.FC<{}> = () => {
  const [person, setPerson] = useState<PersonProps>(PersonDefault);

  const randomDni = () => {
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((result) => {
        const { name, gender, picture, dob } = result.results[0];
        setPerson({
          ...person,
          date: dob.date,
          genderLetter: gender,
          firstName: name.first,
          lastName: name.last,
          picture: picture.large,
          dni: generateRandomDni(),
        });
      });
  };

  return (
    <div className="GenerateRandomDni">
      <h1>Random DNI aplication</h1>
      {person.dni !== '' ? (
        <DniCard
          firstName={person.firstName}
          lastName={person.lastName}
          gender={person.genderLetter}
          date={person.date}
          picture={person.picture}
          dni={person.dni}
        />
      ) : (
        ''
      )}
      <button onClick={randomDni}>Random DNI</button>
    </div>
  );
};

GenerateRandomDni.displayName = 'GenerateRandomDni';
