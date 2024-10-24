import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { TransformedBarChart } from '../../models/transformedChartTypes';
import { CHART_MARGINS } from '../../constants';
import { CHART_COLORS } from '../../constants';

/**
 * Props for the CustomBarChart component.
 */
interface CustomBarChartProps {
  /** The transformed bar chart data to render. */
  chart: TransformedBarChart;
}

/**
 * Renders a bar chart using the provided chart data.
 *
 * @param {CustomBarChartProps} props - The properties for the CustomBarChart component.
 * @returns {JSX.Element} The rendered bar chart.
 */
const CustomBarChart = ({ chart }: CustomBarChartProps): JSX.Element => {
  const { chartTitle, data, xAxisLabel, yAxisLabel } = chart;
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
        <Bar dataKey={'value'} fill={CHART_COLORS[0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
