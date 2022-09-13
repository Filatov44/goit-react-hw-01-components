
import {
  FrendListItemStyled,
  FrendListStatus,
  FriendListImg,
  FriendListName,
} from 'components/FriendList/FriendListItem.styled';

export function FrendListItem({ avatar, name, isOnline, id }) {
    return (
      <FrendListItemStyled key={id}>
        <FrendListStatus isOnline={isOnline}></FrendListStatus>
        <FriendListImg src={avatar} alt={name} />
        <FriendListName>{name}</FriendListName>
      </FrendListItemStyled>
    );
}