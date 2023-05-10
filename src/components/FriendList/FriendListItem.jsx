import { Item, Status, Img, Name } from './FriendList.styled';

export const FriendListItem = ({ avatar, name, id, isOnline }) => {
  return (
    <Item key={id}>
      <Status eventType={isOnline}></Status>
      <Img src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};
