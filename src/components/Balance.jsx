import { useTransactionsTotal } from "../hooks/useTransactionsTotal";

export const Balance = () => {
  const { total } = useTransactionsTotal();

  return (
    <div className="flex justify-between">
      <h2 className="text-xl font-bold">Your Balance</h2>
      <h1 className="text-2xl font-bold">S/ {total}</h1>
    </div>
  );
};
