import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { TransformedStackedBarChart } from '../../models/transformedChartTypes';
import { CHART_MARGINS } from '../../constants';
import { CHART_COLORS } from '../../constants';

/**
 * Props for the CustomStackedBarChart component.
 */
interface CustomStackedBarChartProps {
  /** The transformed stacked bar chart data to render. */
  chart: TransformedStackedBarChart;
}

/**
 * Renders a stacked bar chart using the provided chart data.
 *
 * @param {CustomStackedBarChartProps} props - The properties for the CustomStackedBarChart component.
 * @returns {JSX.Element} The rendered stacked bar chart.
 */
const CustomStackedBarChart = ({
  chart,
}: CustomStackedBarChartProps): JSX.Element => {
  const { categories, chartTitle, data, xAxisLabel, yAxisLabel } = chart;
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={CHART_MARGINS}>
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
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          label={{ value: xAxisLabel, position: 'bottom', offset: 10 }}
          angle={-45}
          textAnchor="end"
        />
        <YAxis
          label={{
            value: yAxisLabel,
            angle: -90,
            position: 'insideLeft',
            offset: -30,
          }}
        />
        <Tooltip />
        <Legend
          verticalAlign="bottom"
          align="right"
          wrapperStyle={{ bottom: 20 }}
          name={yAxisLabel}
        />
        {categories.map((category, index) => (
          <Bar
            key={category}
            dataKey={category}
            stackId="stack" // 'stackId' ensures the bars are stacked
            fill={CHART_COLORS[index % CHART_COLORS.length]}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomStackedBarChart;
