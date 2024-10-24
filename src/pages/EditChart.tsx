import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainWrapper from '../components/MainWrapper';
import {
  TransformedBarChart,
  TransformedChart,
} from '../models/transformedChartTypes';
import { fetchAndTransformCharts } from '../api/apiService';
import Chart from '../components/charts/Chart';
import { ChartType } from '../models/chartTypes';
import BarChartForm from '../components/forms/BarChartForm';

/**
 * EditChart component allows for editing a chart by its ID.
 * Currently supports editing of Bar Charts only.
 * The chart is loaded based on the ID provided in the URL parameters.
 *
 * @component
 * @returns {JSX.Element} The EditChart UI, including chart display and editing options.
 */
const EditChart = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const [chart, setChart] = useState<TransformedChart | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchChart = async () => {
      setIsLoading(true);
      // Note: this would be a function that returns the chart by given id. Made it this way to simplify.
      // Alternative: load the charts in local state (Redux, MobX) and retrieve from the store
      const charts = await fetchAndTransformCharts();
      const selectedChart = charts[parseInt(id!)];
      setChart(selectedChart);
      setIsLoading(false);
    };

    fetchChart();
  }, [id]);

  const handleUpdate = (updatedChart: TransformedBarChart) => {
    setChart(updatedChart);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!chart) {
    return <div>Error Loading Chart</div>;
  }

  return (
    <MainWrapper title="Edit Chart">
      <div>
        <Chart chart={chart} />
        <p className="mt-2 mb-4 text-gray-700">
          To apply any change made, click the Save Changes button.
        </p>
        <h3 className="text-lg font-medium mt-2 mb-4">Chart Information</h3>
        {chart.chartType === ChartType.BAR ? (
          <BarChartForm chart={chart} onUpdate={handleUpdate} />
        ) : (
          <p>Sorry, we can't edit this chart type at the moment.</p>
        )}
      </div>
    </MainWrapper>
  );
};

export default EditChart;
