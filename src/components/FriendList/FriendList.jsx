import PropTypes from 'prop-types';
import { List, Item, Status, Img, Name  } from './FriendList.styled';


export const FriendList = ({ friends }) => {
  return (
    <>
      <List>
        {friends.map(({avatar, name, id, isOnline}) => 
        <Item key={id}>
        <Status eventType={isOnline}></Status>
        <Img src={avatar} alt={name} width="48" />
        <Name>{name}</Name>
        </Item>
        )}
      </List>
    </>
  );
};



FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
      })
    ),
  };