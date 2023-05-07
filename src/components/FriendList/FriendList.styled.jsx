import styled from '@emotion/styled';

export const List = styled.ul`
display: flex;
    flex-direction: column;
    width: 480px;
    flex-direction: column;
    gap: 30px;
    margin: 0 auto;
    margin-top: 70px;
    list-style: none;
`;

export const Item = styled.li`
display: flex;
width: 330px;
height: 110px;
box-shadow: 10px 10px 13px -5px rgba(173,130,164,0.58);
box-sizing: border-box;
border: 1px solid rgba(212, 198, 214, 0.815);
border-radius: 5px;
margin: 0 auto;
`;

const bgStatus = props => {
   if(props.eventType === true) {
    return`green`;
   } else {
    return`red`;
   }
};

export const Status = styled.span`
height: 20px;
width: 20px;
border-radius: 50%;
background-color: ${bgStatus};
margin-left: 20px;
margin-top: 50px;
`;

export const Img = styled.img`
width: 100px;
    height: 100px;
    margin-left: 20px;
    padding-top: 5px;
`;

export const Name = styled.p`
font-size: 36px;
font-weight: 600;
margin-top: 30px;
margin-left: 20px;
`;
