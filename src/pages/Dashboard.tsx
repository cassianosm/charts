import { useEffect, useState } from 'react';
import { TransformedChart } from '../models/transformedChartTypes';
import { fetchAndTransformCharts } from '../api/apiService';
import { ChartType } from '../models/chartTypes';
import CustomLink from '../components/CustomLink';
import MainWrapper from '../components/MainWrapper';
import Chart from '../components/charts/Chart';

/**
 * Dashboard component that fetches and displays a list of charts.
 *
 * This component uses an effect to fetch chart data from an API upon mounting.
 * It displays the the charts with the option to edit
 * individual charts if they are of type BAR.
 *
 * @returns {JSX.Element} A dashboard containing a charts with links to edit them.
 */
const Dashboard = (): JSX.Element => {
  const [charts, setCharts] = useState<TransformedChart[]>([]);

  useEffect(() => {
    const fetchCharts = async () => {
      const data = await fetchAndTransformCharts();
      setCharts(data);
      console.log('data', data);
    };

    fetchCharts();
  }, []);
  return (
    <MainWrapper title="Dashboard">
      <ul className="grid grid-cols-1 gap-10 lg:grid-cols-2 w-full">
        {charts.map((chart, index) => (
          <li
            key={index}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
          >
            <Chart chart={chart} />
            {chart.chartType === ChartType.BAR && (
              <CustomLink to={`/edit/${index}`} label="Edit Chart" />
            )}
          </li>
        ))}
      </ul>
    </MainWrapper>
  );
};

export default Dashboard;
