import styled from '@emotion/styled';

export const Table = styled.table`
  width: 550px;
  font-family: 'Raleway';
  margin-top: 70px;  
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 50px;
  border-collapse: collapse;
  box-shadow: 10px 10px 13px -5px rgba(173,130,164,0.58);
`;

export const TableTh = styled.th`
  padding: 10px;
  border: 1px solid #2a2a2a;  
  color: white;
  background-color: #34ebe1;
`;

export const TypeTd = styled.td`
padding: 10px;
text-align: center;
border: 1px solid #2a2a2a;
color: #C3C1C5;
&::first-letter {
  font-size: 32px;
}
`;

export const TableTd = styled.td`
padding: 10px;
text-align: center;
border: 1px solid #2a2a2a;
color: #C3C1C5;

`;
