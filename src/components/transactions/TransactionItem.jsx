import PropTypes from "prop-types";
import { AiFillCloseCircle } from "react-icons/ai";

export const TransactionItem = ({
  id,
  description,
  amount,
  deleteTransaction,
}) => {
  return (
    <li className="bg-zinc-700 text-white px-3 py-2 rounded-lg mb-4 w-full flex justify-between items-center h-14 shadow-xl">
      <span className="w-52">{description}</span>
      <span className="w-24 text-right">S/ {amount}</span>
      <AiFillCloseCircle
        onClick={() => deleteTransaction(id)}
        className="cursor-pointer"
      />
    </li>
  );
};

TransactionItem.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
  amount: PropTypes.number,
  deleteTransaction: PropTypes.func,
};
