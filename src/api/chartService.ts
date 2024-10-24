import { ResponseChart } from '../models/chartTypes';

/**
 * Mocking an API to fetch chart data from multiple JSON endpoints.
 *
 * This function makes asynchronous requests to retrieve chart data from four different JSON files.
 * It throws an error if any of the responses are not OK or if there is a problem during the fetch operation.
 *
 * @returns {Promise<ResponseChart[]>} A promise that resolves to an array of chart data responses.
 *
 * @throws {Error} Throws an error if the fetch operation fails or if any response is not OK.
 */
export const getCharts = async (): Promise<ResponseChart[]> => {
  try {
    const res1 = await fetch('/chart1.json');
    const res2 = await fetch('/chart2.json');
    const res3 = await fetch('/chart3.json');
    const res4 = await fetch('/chart4.json');

    // Check if responses are OK
    if (!res1.ok || !res2.ok || !res3.ok || !res4.ok) {
      throw new Error('Failed to fetch charts data');
    }

    const chart1 = await res1.json();
    const chart2 = await res2.json();
    const chart3 = await res3.json();
    const chart4 = await res4.json();

    return [chart1, chart2, chart3, chart4];
  } catch (error) {
    console.log('Error', error);
    throw new Error('Error fetching chart data');
  }
};
