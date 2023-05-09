import PropTypes from 'prop-types';
import { Table, TableTh, TypeTd, TableTd } from './TransactionHistory.styled';


export const TransactionHistory = ({ items }) => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <TableTh>Type</TableTh>
            <TableTh>Amount</TableTh>
            <TableTh>Currency</TableTh>
          </tr>
        </thead>
        {items.map(({ id, type, amount, currency }) => (
          <tbody key={id}>
            <tr>
              <TypeTd>{type}</TypeTd>
              <TableTd>{amount}</TableTd>
              <TableTd>{currency}</TableTd>
            </tr>
          </tbody>
        ))}
      </Table>
    </>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
