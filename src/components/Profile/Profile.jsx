import PropTypes from 'prop-types';

export const Profile = ({
  avatarUrl,
  userName,
  tagUser,
  location,
  followers,
  views,
  likes,
}) => {
  return(
    <div className="profile">
    <div className="description">
      <img src={avatarUrl} alt="User avatar" className="avatar" />
      <p className="name">{userName}</p>
      <p className="tag">@{tagUser}</p>
      <p className="location">{location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{likes}</span>
      </li>
    </ul>
  </div>
  );
};

Profile.propTypes = {
    avatarUrl: PropTypes.string,
    userName: PropTypes.string,
    tagUser:PropTypes.string,
    location:PropTypes.string,
    views:PropTypes.number,
    likes:PropTypes.number,
}


