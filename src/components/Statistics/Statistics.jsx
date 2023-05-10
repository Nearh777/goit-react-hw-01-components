import PropTypes from 'prop-types';
import { Section, Title, List, ListItem, Label, Percentage } from './Statistic.styled';


export const Statistics = ({ stats, title }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}      
      <List>
        {stats.map(({ label, percentage, id }) => (
          <ListItem key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </ListItem>
        ))}
      </List>
    </Section>
  );
};

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

