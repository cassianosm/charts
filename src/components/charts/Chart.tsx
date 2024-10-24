import {
  TransformedBarChart,
  TransformedChart,
  TransformedLineChart,
  TransformedPieChart,
  TransformedStackedBarChart,
} from '../../types';
import { ChartType } from '../../api/types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { CHART_MARGINS } from '../../constants';

// TODO
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF5722'];

const Chart = ({ chart }: { chart: TransformedChart }): JSX.Element => {
  switch (chart.chartType) {
    case ChartType.BAR:
      return <CustomBarChart chart={chart} />;
    case ChartType.STACKED_BAR:
      return <CustomStackedBarChart chart={chart} />;
    case ChartType.LINE:
      return <CustomLineChart chart={chart} />;
    case ChartType.PIE:
      return <CustomPieChart chart={chart} />;
    default:
      return <></>;
  }
};

const CustomBarChart = ({ chart }: { chart: TransformedBarChart }) => {
  const { chartTitle, data, xAxisLabel, yAxisLabel } = chart;
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{
          top: CHART_MARGINS.top,
          right: CHART_MARGINS.right,
          left: CHART_MARGINS.left,
          bottom: CHART_MARGINS.bottom,
        }}
      >
        {/* https://github.com/recharts/recharts/issues/478#issuecomment-998451343 */}
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
          name={yAxisLabel}
        />
        <Bar dataKey={yAxisLabel} fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

const CustomStackedBarChart = ({
  chart,
}: {
  chart: TransformedStackedBarChart;
}) => {
  const { categories, chartTitle, data, xAxisLabel, yAxisLabel } = chart;
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{
          top: CHART_MARGINS.top,
          right: CHART_MARGINS.right,
          left: CHART_MARGINS.left,
          bottom: CHART_MARGINS.bottom,
        }}
      >
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
          name={yAxisLabel}
        />
        {categories.map((category, index) => (
          <Bar
            key={category}
            dataKey={category}
            stackId="stack" // 'stackId' ensures the bars are stacked
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

const CustomLineChart = ({ chart }: { chart: TransformedLineChart }) => {
  const { categories, chartTitle, data, xAxisLabel, yAxisLabel } = chart;
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{
          top: CHART_MARGINS.top,
          right: CHART_MARGINS.right,
          left: CHART_MARGINS.left,
          bottom: CHART_MARGINS.bottom,
        }}
      >
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
            stroke={COLORS[index % COLORS.length]}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

const CustomPieChart = ({ chart }: { chart: TransformedPieChart }) => {
  const { chartTitle, data } = chart;
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart
        margin={{
          top: CHART_MARGINS.top,
          right: CHART_MARGINS.right,
          left: CHART_MARGINS.left,
          bottom: CHART_MARGINS.bottom,
        }}
      >
        <text
          x={'50%'}
          y={20}
          fill="black"
          textAnchor="middle"
          dominantBaseline="central"
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
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Chart;
