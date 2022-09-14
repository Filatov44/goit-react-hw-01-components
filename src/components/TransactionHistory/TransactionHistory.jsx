// import PropTypes from 'prop-types';
import { TransactionHistoryItem } from 'components/TransactionHistory/TransactionHistoryItem';
import {
  TransactionHistoryStyled,
  TransactionHistoryHead,
  TransactionHistoryString,
  TransactionHistoryBody,
} from 'components/TransactionHistory/TransactionHistoryItem.styled';

export function TransactionHistory({ items }) {
  console.log(items);
  return (
    <TransactionHistoryStyled>
      <TransactionHistoryHead>
        <tr>
          <TransactionHistoryString>Type</TransactionHistoryString>
          <TransactionHistoryString>Amount</TransactionHistoryString>
          <TransactionHistoryString>Currency</TransactionHistoryString>
        </tr>
      </TransactionHistoryHead>

      <TransactionHistoryBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TransactionHistoryItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </TransactionHistoryBody>
    </TransactionHistoryStyled>
  );
}

// TransactionHistory.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       type: PropTypes.string.isRequired,
//       amount: PropTypes.string.isRequired,
//       currency: PropTypes.string.isRequired,
//     })
//   ),
// };
