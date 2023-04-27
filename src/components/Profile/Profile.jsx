import PropTypes from 'prop-types';
import css from 'components/Profile/Profile.module.css'

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
    <div className={css.profile}>
    <div className={css.description}>
      <img src={avatarUrl} alt="User avatar" className={css.avatar} />
      <p className={css.name}>{userName}</p>
      <p className={css.tag}>@{tagUser}</p>
      <p className={css.location}>{location}</p>
    </div>

    <ul className={css.stats}>
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
    avatarUrl: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    tagUser:PropTypes.string.isRequired,
    location:PropTypes.string.isRequired,
    views:PropTypes.number.isRequired,
    likes:PropTypes.number.isRequired,
}


