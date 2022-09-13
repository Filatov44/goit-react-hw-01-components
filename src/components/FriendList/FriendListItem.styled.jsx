import styled from 'styled-components';
// import { theme } from '../../theme';
export const FrendListItemStyled = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 5px;
`;

export const FrendListStatus = styled.span`
  /* background-color: red; */
  background-color: ${p =>
    p.isOnline ? "green" : "red"};
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const FriendListImg = styled.img`
  display: block;
  width: 40px;
  margin-right: 25px;
`;

export const FriendListName = styled.p`
  color: black;
  font-size: 24px;
  font-weight: 600;
`;
