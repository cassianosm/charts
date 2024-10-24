import {
  transformBarChartData,
  transformLineChartData,
  transformPieChartData,
  transformStackedBarChartData,
} from './chatTransformations';
import { ChartType, ResponseChart } from './types';
import { getCharts } from './chartService';
import { TransformedChart } from '../types';

/**
 * Fetches charts from the API and transforms the data.
 *
 * @returns {Promise<TransformedChart[]>} A promise that resolves to the transformed chart data.
 */
export const fetchAndTransformCharts = async (): Promise<
  TransformedChart[]
> => {
  const data: ResponseChart[] = await getCharts();

  return data
    .map(chart => {
      switch (chart.chartType) {
        case ChartType.BAR:
          return { ...chart, data: transformBarChartData(chart) };
        case ChartType.STACKED_BAR:
          return { ...chart, data: transformStackedBarChartData(chart) };
        case ChartType.LINE:
          return { ...chart, data: transformLineChartData(chart) };
        case ChartType.PIE:
          return { ...chart, data: transformPieChartData(chart) };
        default:
          return null;
      }
    })
    .filter(chart => chart !== null);
};
