import { useState } from "react";
import { useGlobalState } from "../../hooks/useGlobalState";

export const TransactionForm = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useGlobalState();

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter a Description"
          onChange={(e) => setDescription(e.target.value)}
          className="block w-full rounded-lg border-none px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-3 outline-none"
        />

        <input
          type="number"
          step="0.01"
          placeholder="Enter an Amount"
          onChange={(e) => setAmount(e.target.value)}
          className="block w-full rounded-lg border-none px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-3 outline-none"
        />

        <button className="flex w-full justify-center rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:shadow-md hover:shadow-indigo-500/50">
          Add transaction
        </button>
      </form>
    </>
  );
};
