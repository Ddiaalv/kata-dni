import * as React from 'react';
import { useState } from 'react';
import './GenerateRandomDni.scss';
import { generateRandomDni } from '../../../utils/utils';
import { PersonDefault, PersonProps } from './types';
import { DniCard } from '../../DniCard';
import {
  Title,
  GenerateRandomDniContainer,
  Button,
  RandomDniStructure,
  GenerateRandomInfo,
} from './styles';

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
    <GenerateRandomDniContainer>
      <RandomDniStructure>
        <GenerateRandomInfo>
          <Title>Genera un dni aleatorio</Title>
          <h3>Instrucciones:</h3>
          <p>
            Unicamente debes hacer clic sobre el boton “GENERATE DNI” y podrás generar un
            nuevo DNI. Cabe destacar que los nombres y las personas que aparecen en esta
            aplicación son recogidos de una API llamada: randomuser.me.
          </p>
        </GenerateRandomInfo>

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
      </RandomDniStructure>
      <Button className={'button'} role="button" onClick={randomDni}>
        Random DNI
      </Button>
    </GenerateRandomDniContainer>
  );
};

GenerateRandomDni.displayName = 'GenerateRandomDni';
