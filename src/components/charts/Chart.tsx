import { TransformedChart } from '../../models/transformedChartTypes';
import { ChartType } from '../../models/chartTypes';
import CustomBarChart from './CustomBarChart';
import CustomStackedBarChart from './CustomStackedBarChart';
import CustomPieChart from './CustomPieChart';
import CustomLineChart from './CustomLineChart';

/**
 * Props for the Chart component.
 */
interface ChartProps {
  /** The transformed chart data to render. */
  chart: TransformedChart;
}

/**
 * Renders the appropriate chart component based on the provided chart type.
 *
 * @param {ChartProps} props - The properties for the Chart component.
 * @returns {JSX.Element} The rendered chart component.
 */
const Chart = ({ chart }: ChartProps): JSX.Element => {
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

export default Chart;
