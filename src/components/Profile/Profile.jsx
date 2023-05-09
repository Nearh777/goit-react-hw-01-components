import PropTypes from 'prop-types';
import { Container, Description, AvatarImg, Name, Tag, Location, Stats, Item, Label, Quantity } from './Profile.styled';
// import css from 'components/Profile/Profile.module.css'

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
    <Container>
    <Description>
      <AvatarImg src={avatarUrl} alt="User avatar"/>
      <Name>{userName}</Name>
      <Tag>@{tagUser}</Tag>
      <Location>{location}</Location>
    </Description>

    <Stats>
      <Item>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </Item>
      <Item>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </Item>
      <Item>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </Item>
    </Stats>
  </Container>
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


