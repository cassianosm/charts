import { ChartType } from './api/types';

// For Pie Chart Data
export interface PieChartDataPoint {
  name: string;
  value: number;
}

// For Line Chart Data
export interface LineChartDataPoint {
  name: string;
  x: string;
  [key: string]: number | string;
}

// For Bar Chart Data
export interface BarChartDataPoint {
  name: string;
  [key: string]: number | string;
}

// Interfaces incorporating the transformed data
export interface TransformedPieChart {
  chartType: ChartType.PIE;
  chartTitle: string;
  data: PieChartDataPoint[];
}

export interface TransformedLineChart {
  chartType: ChartType.LINE;
  chartTitle: string;
  xAxisLabel: string;
  yAxisLabel: string;
  categories: string[];
  data: LineChartDataPoint[];
}

export interface TransformedStackedBarChart {
  chartType: ChartType.STACKED_BAR;
  chartTitle: string;
  xAxisLabel: string;
  yAxisLabel: string;
  categories: string[];
  data: BarChartDataPoint[];
}

export interface TransformedBarChart {
  chartType: ChartType.BAR;
  chartTitle: string;
  xAxisLabel: string;
  yAxisLabel: string;
  data: BarChartDataPoint[];
}

export type TransformedChart =
  | TransformedBarChart
  | TransformedStackedBarChart
  | TransformedLineChart
  | TransformedPieChart;
