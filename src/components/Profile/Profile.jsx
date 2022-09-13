import PropTypes from 'prop-types';
import {
  ProfileContainer,
  ProfileDescription,
  ProfileAvatar,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  ProfileStats,
  ProfileStatsItem,
  ProfileLabel,
  ProfileQuantity,
} from 'components/Profile/Profile.styled';
export function Profile({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <ProfileContainer>
      <ProfileDescription>
        <ProfileAvatar src={avatar} alt={username} />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDescription>
      <ProfileStats>
        <ProfileStatsItem>
          <ProfileLabel>Followers</ProfileLabel>
          <ProfileQuantity>{followers}</ProfileQuantity>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <ProfileLabel>Views</ProfileLabel>
          <ProfileQuantity>{views}</ProfileQuantity>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <ProfileLabel>Likes</ProfileLabel>
          <ProfileQuantity>{likes}</ProfileQuantity>
        </ProfileStatsItem>
      </ProfileStats>
    </ProfileContainer>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
