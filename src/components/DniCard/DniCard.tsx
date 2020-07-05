import * as React from 'react';
import './DniCard.scss';
import { DniCardContainer, DniInfo, DniInfoTitle, DniTitle, DniInfoImg } from './style';

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
  <DniCardContainer>
    <DniInfoImg id="DniInfoImg">
      <img src={picture} alt="Foto tamaño DNI de una persona" />
      <DniInfoTitle>dni</DniInfoTitle>
      <DniInfo>{dni}</DniInfo>
    </DniInfoImg>
    <div id="DniInfo">
      <DniTitle>DNI</DniTitle>
      <DniInfoTitle>apellidos</DniInfoTitle>
      <DniInfo> {lastName}</DniInfo>
      <DniInfoTitle>nombre</DniInfoTitle>
      <DniInfo>{firstName}</DniInfo>
      <DniInfoTitle>sexo</DniInfoTitle>
      <DniInfo> {gender}</DniInfo>
      <DniInfoTitle>fecha nacimiento</DniInfoTitle>
      <DniInfo> {date}</DniInfo>
    </div>
  </DniCardContainer>
);

DniCard.displayName = 'DniCard';
