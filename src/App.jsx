import {
  Balance,
  ExpenseChart,
  IncomeExpenses,
  TransactionForm,
  TransactionList,
} from "./components";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-950 text-white h-screen flex justify-center items-center w-full">
        <div className="bg-zinc-800 p-20 rounded-lg flex flex-wrap gap-20">
          <div className="w-80 flex flex-col gap-4">
            <h1 className="text-4xl font-bold"> Expense Tracker </h1>
            <IncomeExpenses />
            <Balance />
            <TransactionForm />
          </div>

          <div className="w-96 flex flex-col">
            <ExpenseChart />
            <TransactionList />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
