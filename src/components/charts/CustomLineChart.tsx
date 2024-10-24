import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { TransformedLineChart } from '../../models/transformedChartTypes';
import { CHART_MARGINS } from '../../constants';
import { CHART_COLORS } from '../../constants';

/**
 * Props for the CustomLineChart component.
 */
interface CustomLineChartProps {
  /** The transformed line chart data to render. */
  chart: TransformedLineChart;
}

/**
 * Renders a line chart using the provided chart data.
 *
 * @param {CustomLineChartProps} props - The properties for the CustomLineChart component.
 * @returns {JSX.Element} The rendered line chart.
 */
const CustomLineChart = ({ chart }: CustomLineChartProps): JSX.Element => {
  const { categories, chartTitle, data, xAxisLabel, yAxisLabel } = chart;
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={CHART_MARGINS}>
        <text
          x={'50%'}
          y={20}
          fill="black"
          textAnchor="middle"
          dominantBaseline="central"
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
        />
        {categories?.map((category, index) => (
          <Line
            key={index}
            type="monotone"
            dataKey={category}
            stroke={CHART_COLORS[index % CHART_COLORS.length]}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomLineChart;
