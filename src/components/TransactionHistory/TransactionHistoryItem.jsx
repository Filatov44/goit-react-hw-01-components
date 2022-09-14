import {
  TransactionHistoryTd,
  TransactionHistoryTr,
} from 'components/TransactionHistory/TransactionHistoryItem.styled';

export function TransactionHistoryItem({ id, type, amount, currency }) {
  return (
    <TransactionHistoryTr>
      <TransactionHistoryTd key={id}>{type}</TransactionHistoryTd>
      <TransactionHistoryTd>{amount}</TransactionHistoryTd>
      <TransactionHistoryTd>{currency}</TransactionHistoryTd>
    </TransactionHistoryTr>
  );
}
