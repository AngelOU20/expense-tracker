// import PropTypes from "prop-types";
import { useGlobalState } from "../../hooks/useGlobalState";
import { TransactionItem } from "./TransactionItem";
import "./transaction.css";

export const TransactionList = () => {
  const { transactions, deleteTransaction } = useGlobalState();
  return (
    <>
      {transactions.length > 0 ? (
        <>
          <h3 className="text-slate-300 text-xl font-bold block my-2">
            History
          </h3>
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
      ) : (
        <h2 className="text-slate-300 text-3xl font-extrabold my-2 flex justify-center items-center h-full">
          No history
        </h2>
      )}
    </>
  );
};

TransactionList.propTypes = {};
