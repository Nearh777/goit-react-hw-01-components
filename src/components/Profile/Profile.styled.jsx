import styled from '@emotion/styled';

export const Container = styled.div`
font-family: 'Raleway';
    width: 480px;
    margin: 0 auto;
    padding: 0px;
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-bottom: 50px;    
    background-color: hsla(195, 11%, 55%, 0.872);
`;

export const Description = styled.div`
width: 330px;
justify-content: center;
background-color: rgb(248, 245, 245);
margin-left: 80px;
margin-right: 80px;
margin-top: 40px;
padding-top: 40px;
`;

export const AvatarImg = styled.img`
display: block;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    margin-top: 10px;
    max-width: 100px;
    border-radius: 100px;
    background-color: rgba(168, 116, 168, 0.527);
`;

export const Name = styled.p`
font-size: 36px;
font-weight: 600;
text-align: center;
font-style: bold;
margin-top: 50px;
line-height: 1.33;
`;

export const Tag = styled.p`
font-size: 16px;
    text-align: center;
    line-height: 1.33;
`;

export const Location = styled.p`
font-size: 24px;
    text-align: center;
    margin-bottom: 40px;
    padding-bottom: 30px;
`;

export const Stats = styled.ul`
display: flex;
width: 330px;
margin-left: 40px;
margin-top: 0;
padding-bottom: 50px;
justify-content: center;
`;

export const Item = styled.li`
width: 110px;
    height: 90px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border: 1px solid;
    border-color: gray;
    text-align: center;
    justify-content: center;
    
    background-color:rgba(197, 194, 194, 0.826)
`;

export const Label = styled.span`
color: gray;
`;

export const Quantity = styled.span`
font-size: 18px;
    font-weight: 700;
`;

