export interface ChartDataPoint {
  x: string;
  y: number;
}

export enum ChartType {
  BAR = 'bar',
  STACKED_BAR = 'bar - stacked',
  LINE = 'line',
  PIE = 'pie',
}

export interface ResponseBarChart {
  chartType: ChartType.BAR;
  chartTitle: string;
  xAxisLabel: string;
  yAxisLabel: string;
  data: ChartDataPoint[];
}

export interface ResponseStackedBarChart {
  chartType: ChartType.STACKED_BAR;
  chartTitle: string;
  xAxisLabel: string;
  yAxisLabel: string;
  categories: string[];
  data: { x: string; values: number[] }[];
}

export interface ResponseLineChart {
  chartType: ChartType.LINE;
  chartTitle: string;
  xAxisLabel: string;
  yAxisLabel: string;
  categories: string[];
  data: { x: string } & Record<string, number>[];
}

export interface ResponsePieChart {
  chartType: ChartType.PIE;
  chartTitle: string;
  data: ChartDataPoint[];
}

export type ResponseChart =
  | ResponseBarChart
  | ResponseStackedBarChart
  | ResponseLineChart
  | ResponsePieChart;
