import PropTypes from 'prop-types';

import { FrendListStyled } from 'components/FriendList/FriendList.styled';
import { FrendListItem } from 'components/FriendList/FriendListItem';
export function FriendList({ friends }) {
  return (
    <FrendListStyled>
      {friends.map(friend => {
        return (
          <FrendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            
          />
        );
      })}
    </FrendListStyled>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
