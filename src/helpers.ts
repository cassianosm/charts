import {
  BarChartDataPoint,
  LineChartDataPoint,
  PieChartDataPoint,
  StackedBarChartDataPoint,
} from './models/transformedChartTypes';
import {
  ResponseBarChart,
  ResponseStackedBarChart,
  ResponseLineChart,
  ResponsePieChart,
} from './models/chartTypes';

/**
 * Transforms data for a bar chart.
 *
 * @param {ResponseBarChart} chart - The chart data to transform.
 * @returns {typeof TransformedBarChart.data} The transformed data suitable for the chart component.
 */
export const transformBarChartData = (
  chart: ResponseBarChart,
): BarChartDataPoint[] => {
  return chart.data.map(point => ({
    name: point.x,
    value: point.y,
  }));
};

/**
 * Transforms data for a bar chart.
 *
 * @param {ResponseBarChart | ResponseStackedBarChart} chart - The chart data to transform.
 * @returns {StackedBarChartDataPoint[]} The transformed data suitable for the chart component.
 */
export const transformStackedBarChartData = (
  chart: ResponseStackedBarChart,
): StackedBarChartDataPoint[] => {
  return (chart.data as { x: string; values: number[] }[]).map(point => {
    const result: StackedBarChartDataPoint = { name: point.x }; // 'name' is string, dynamic keys are numbers
    chart.categories?.forEach((category, index) => {
      result[category] = point.values[index];
    });
    return result;
  });
};

/**
 * Transforms data for a line chart.
 *
 * @param {ResponseLineChart} chart - The chart data to transform.
 * @returns {LineChartDataPoint[]} The transformed data suitable for the chart component.
 */
export const transformLineChartData = (
  chart: ResponseLineChart,
): Array<LineChartDataPoint> => {
  return chart.data.map(point => ({
    name: String(point.x),
    x: String(point.x),
    ...point,
  }));
};

/**
 * Transforms data for a pie chart.
 *
 * @param {ResponsePieChart} chart - The chart data to transform.
 * @returns {PieChartDataPoint[]} The transformed data suitable for the chart component.
 */
export const transformPieChartData = (
  chart: ResponsePieChart,
): Array<PieChartDataPoint> => {
  return chart.data.map(point => ({
    name: point.x,
    value: point.y,
  }));
};
