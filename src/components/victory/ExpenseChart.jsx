import { VictoryPie, VictoryLabel } from "victory";
import { useTransactionsTotal } from "../../hooks/useTransactionsTotal";
import { useGlobalState } from "../../hooks/useGlobalState";

export const ExpenseChart = () => {
  const { transactions } = useGlobalState();
  const { income, expense } = useTransactionsTotal();

  const initialIncome = income || 0;
  const initialExpense = expense || 0;

  const expensePercentage =
    initialIncome !== 0
      ? Math.round((initialExpense / initialIncome) * 100)
      : Math.round((initialExpense / initialExpense) * 100);
  const icomePercentage = 100 - expensePercentage;

  return (
    <div className="w-full h-auto">
      {transactions.length > 0 ? (
        <VictoryPie
          colorScale={["#b11e24", "#0fffa3"]}
          animate={{ duration: 400 }}
          data={[
            { x: "Expenses", y: expensePercentage },
            { x: "Incomes", y: icomePercentage },
          ]}
          padAngle={2}
          cornerRadius={5}
          innerRadius={100}
          labels={({ datum }) => `${datum.y}%`}
          labelComponent={<VictoryLabel angle={10} style={{ fill: "white" }} />}
        />
      ) : (
        ""
      )}
    </div>
  );
};
