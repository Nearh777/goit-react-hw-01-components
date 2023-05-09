import styled from '@emotion/styled';

export const Section = styled.section`
  width: 480px;
  display: block;
  font-family: 'Raleway';
  margin: 0 auto;
//   background-color: hsla(195, 11%, 55%, 0.872);
  list-style: none;
`;

export const Title = styled.h2`
  font-weight: 600;
  text-align: center;
  padding: 20px;
  margin: 0;
  background-color: white;  
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin-top: 0;
`;



export const Label = styled.span`
margin-bottom: 5px;
`;

export const Percentage = styled.span`
font-size: 18px;
font-weight: 700;
`;

export const ListItem = styled.li`
  width: 120px;
  height: 70px;
  display: flex;
  padding: 0;
  color: white;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid;
  border-color: gray;
  text-align: center;
  justify-content: center;
  background-color: ${props => {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
  }};
`;

