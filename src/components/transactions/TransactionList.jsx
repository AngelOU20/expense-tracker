// import PropTypes from "prop-types";
import { useGlobalState } from "../../hooks/useGlobalState";
import { TransactionItem } from "./TransactionItem";
import "./transaction.css";

export const TransactionList = () => {
  const { transactions, deleteTransaction } = useGlobalState();
  return (
    <>
      <h3 className="text-slate-300 text-xl font-bold block my-2">History</h3>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            {...transaction}
            deleteTransaction={deleteTransaction}
          />
        ))}
      </ul>
    </>
  );
};

TransactionList.propTypes = {};
