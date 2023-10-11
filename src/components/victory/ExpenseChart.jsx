// import PropTypes from "prop-types";
import { VictoryPie, VictoryLabel } from "victory";
import { useTransactionsTotal } from "../../hooks/useTransactionsTotal";

export const ExpenseChart = () => {
  const { income, expense } = useTransactionsTotal();

  const expensePercentage = Math.round((expense / income) * 100);
  const icomePercentage = 100 - expensePercentage;

  console.log({ icomePercentage, expensePercentage });

  return (
    <div className="w-full h-auto">
      <VictoryPie
        colorScale={["#b11e24", "#0fffa3"]}
        animate={{ duration: 200 }}
        data={[
          { x: "Expenses", y: expensePercentage },
          { x: "Incomes", y: icomePercentage },
        ]}
        padAngle={2}
        cornerRadius={5}
        innerRadius={100}
        labels={({ datum }) => `${datum.y}%`}
        labelComponent={<VictoryLabel angle={45} style={{ fill: "white" }} />}
      />
    </div>
  );
};

ExpenseChart.propTypes = {};
