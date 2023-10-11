import { useTransactionsTotal } from "../hooks/useTransactionsTotal";

export const IncomeExpenses = () => {
  const { income, expense } = useTransactionsTotal();

  return (
    <>
      <div className="flex justify-between">
        <h4 className="text-lg">Income</h4>
        <p className="text-lg">S/ {income}</p>
      </div>

      <div className="flex justify-between">
        <h4 className="text-lg">Expenses</h4>
        <p className="text-lg">S/ {expense}</p>
      </div>
    </>
  );
};
