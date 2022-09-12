import styled from 'styled-components';

export const ProfileContainer = styled.div`
  box-sizing: border-box;
  width: 250px;
  box-shadow: 0px 0px 6px 2px #ffffff50;
  border-radius: 5px;
  border: 2px solid #000000;
`;

export const ProfileDescription = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProfileAvatar = styled.img`
  border-radius: 50%;
  display: inline-block;
  width: 100%;
`;

export const ProfileName = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: black;
`;

export const ProfileTag = styled.p`
  color: gray;
`;

export const ProfileLocation = styled.p`
  color: gray;
`;

export const ProfileStats = styled.ul`
  padding: 0px;
  background-color: rgba(199, 193, 193, 0.18);
  display: flex;
  justify-content: center;
`;

export const ProfileStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right: 15px;
`;

export const ProfileLabel = styled.span`
  color: gray;
`;

export const ProfileQuantity = styled.span`
  color: black;
  font-size: 16px;
  font-weight: 500;
`;
