import styled from 'styled-components';
import { RandomColor } from './RandomColor';
export const StatisticSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatisticTitle = styled.h2`
  text-align: center;
  padding: 20px;
  text-transform: uppercase;
`;

export const StatisticStatList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right: 10px;
  margin-bottom: 10px;
  /* background-color: red; */
  background-color: #${RandomColor};
  width: 100px;
  padding: 10px 0px;
`;

export const StatisticLabel = styled.span`
  color: white;
  font-size: 16px;
`;
export const StatisticPercentage = styled.span`
  color: white;
  font-size: 24px;
`;


