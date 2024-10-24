import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { TransformedPieChart } from '../../models/transformedChartTypes';
import { CHART_MARGINS } from '../../constants';
import { CHART_COLORS } from '../../constants';

/**
 * Props for the CustomPieChart component.
 */
interface CustomPieChartProps {
  /** The transformed pie chart data to render. */
  chart: TransformedPieChart;
}

/**
 * Renders a pie chart using the provided chart data.
 *
 * @param {CustomPieChartProps} props - The properties for the CustomPieChart component.
 * @returns {JSX.Element} The rendered pie chart.
 */
const CustomPieChart = ({ chart }: CustomPieChartProps): JSX.Element => {
  const { chartTitle, data } = chart;
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart margin={CHART_MARGINS}>
        <text
          x={'50%'}
          y={20}
          fill="#555"
          textAnchor="middle"
          dominantBaseline="central"
          className="text-lg font-semibold"
        >
          <tspan style={{ fontSize: '1rem' }}>{chartTitle}</tspan>
        </text>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label={entry => `${entry.name}: ${entry.value}`}
        >
          {data.map((_, index) => (
            <Cell
              key={index}
              fill={CHART_COLORS[index % CHART_COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
