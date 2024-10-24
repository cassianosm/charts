import React, { useState } from 'react';
import {
  BarChartDataPoint,
  TransformedBarChart,
} from '../../models/transformedChartTypes';
import DataPointList from './DataPointsList';
import AddDataPoint from './AddDataPoint';
import InputField from './InputField'; // Import the InputField component

interface ChartFormProps {
  chart: TransformedBarChart;
  onUpdate: (updatedChart: TransformedBarChart) => void;
}

/**
 * BarChartForm component allows users to edit chart properties and data points.
 *
 * @component
 * @param {ChartFormProps} props - Props for the BarChartForm component.
 * @param {TransformedBarChart} props.chart - The current chart data to edit.
 * @param {(updatedChart: TransformedBarChart) => void} props.onUpdate - Function to handle updating the chart data.
 *
 * @returns {JSX.Element} A form for editing the bar chart's properties and data points.
 */
const BarChartForm: React.FC<ChartFormProps> = ({
  chart,
  onUpdate,
}: ChartFormProps): JSX.Element => {
  const [formData, setFormData] = useState<TransformedBarChart>(chart);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateDataPoints = (updatedData: BarChartDataPoint[]) => {
    setFormData({ ...formData, data: updatedData });
  };

  const handleAddNewDataPoint = (newDataPoint: BarChartDataPoint) => {
    setFormData(prevData => ({
      ...prevData,
      data: [...prevData.data, newDataPoint],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 lg:w-[600px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium">Chart Title</label>
          <InputField
            type="text"
            name="chartTitle"
            value={formData.chartTitle}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">X Axis Label</label>
          <InputField
            type="text"
            name="xAxisLabel"
            value={formData.xAxisLabel}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Y Axis Label</label>
          <InputField
            type="text"
            name="yAxisLabel"
            value={formData.yAxisLabel}
            onChange={handleChange}
          />
        </div>
      </div>
      <h3 className="text-lg font-medium">Data</h3>
      <DataPointList data={formData.data} onUpdate={handleUpdateDataPoints} />
      <h3 className="text-lg font-medium mt-4">Add New Data Point</h3>
      <AddDataPoint onUpdate={handleAddNewDataPoint} />
      <button
        type="submit"
        className="mt-4 w-full p-2 bg-blue-600 text-white rounded-md 
             hover:bg-blue-700 active:bg-blue-800 transition duration-200"
      >
        Save Changes
      </button>
    </form>
  );
};

export default BarChartForm;
