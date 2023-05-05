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
      <li className={css.item}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{followers}</span>
      </li>
      <li className={css.item}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{views}</span>
      </li>
      <li className={css.item}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{likes}</span>
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


