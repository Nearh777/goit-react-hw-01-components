import PropTypes from 'prop-types';
// import { FriendListItem } from 'components/FriendList/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <>
      <ul className="friend__list">
        {friends.map(({avatar, name, id, isOnline}) => 
        <li className="item" key={id}>
        <span className="status"></span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
        </li>
        )}
      </ul>
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