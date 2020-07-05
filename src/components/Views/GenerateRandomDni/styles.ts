import styled from 'styled-components';

export const Title = styled.h1`
  color: #9b54fe;
  text-transform: uppercase;
  font-size: 30px;
`;

export const Button = styled.div`
  background: linear-gradient(
    135deg,
    rgba(25, 198, 225, 1) 0%,
    rgba(246, 5, 254, 1) 100%
  );
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  padding: 13px 20px;
  border-radius: 27px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  margin: 10px;
  text-align: center;
  max-width: 150px;
`;

export const GenerateRandomDniContainer = styled.div`
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RandomDniStructure = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
export const GenerateRandomInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 15px;
  p {
    font-size: 20px;
  }
`;
