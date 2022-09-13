import PropTypes from 'prop-types';

import {
  StatisticSection,
  StatisticTitle,
  StatisticStatList,
  StatisticItem,
  StatisticLabel,
  StatisticPercentage,
} from 'components/Statistics/Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <StatisticSection>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticStatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticItem key={id}>
              <StatisticLabel>{label}</StatisticLabel>
              <StatisticPercentage>{percentage}%</StatisticPercentage>
            </StatisticItem>
          );
        })}
      </StatisticStatList>
    </StatisticSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
