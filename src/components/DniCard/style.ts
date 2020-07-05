import styled from 'styled-components';
import rainbow from './assets/rainbow.jpg';

const DniCardContainer = styled.div`
  background: url(${rainbow}) no-repeat center;
  background-size: 100%;
  padding: 20px;
  max-width: 500px;
  min-width: 440px;
  display: flex;
  border: 1px solid #000;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  img {
    width: 150px;
  }
`;

const DniInfoTitle = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  margin: 0;
`;

const DniInfo = styled.p`
  text-transform: capitalize;
  margin: 2px;
  font-size: 22px;
`;

const DniTitle = styled.h2`
  color: #19c6ff;
  font-size: 30px;
  margin: 0 0 20px 0;
`;

const DniInfoImg = styled.div`
  margin-right: 20px;
  display: grid;
  grid-template-columns: 20% 80%;
  align-items: center;
  img {
    grid-column: 1/4;
  }
`;

export { DniCardContainer, DniInfoTitle, DniInfo, DniTitle, DniInfoImg };
