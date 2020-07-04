import * as React from 'react';
import './DniCard.scss';

interface DniCardProps {
  lastName: string;
  firstName: string;
  gender: string;
  date: string;
  dni: string;
  picture: string;
}

export const DniCard: React.FC<DniCardProps> = ({
  lastName,
  firstName,
  gender,
  date,
  dni,
  picture,
}) => (
  <div className="DniCard">
    <img src={picture} alt="" />
    <p> Apellidos: {lastName}</p>
    <p> Nombre: {firstName}</p>
    <p> Sexo: {gender}</p>
    <p> Fecha nacimiento: {date}</p>
    <p> DNI: {dni}</p>
  </div>
);

DniCard.displayName = 'DniCard';
