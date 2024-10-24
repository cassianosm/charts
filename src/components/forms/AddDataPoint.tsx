import React, { useState } from 'react';
import { BarChartDataPoint } from '../../models/transformedChartTypes';
import InputField from './InputField';

interface AddDataPointProps {
  onUpdate: (updatedData: BarChartDataPoint) => void;
}

/**
 * AddDataPoint component allows users to add a new data point (label and value) for a bar chart.
 *
 * @component
 * @param {AddDataPointProps} props - Props for the AddDataPoint component.
 * @param {(updatedData: BarChartDataPoint) => void} props.onUpdate - Function to handle updating the data with a new data point.
 *
 * @returns {JSX.Element} A form for adding a new bar chart data point.
 */
const AddDataPoint: React.FC<AddDataPointProps> = ({
  onUpdate,
}: AddDataPointProps): JSX.Element => {
  const [newLabel, setNewLabel] = useState<string>('');
  const [newValue, setNewValue] = useState<number>(0);

  const handleAddDataPoint = () => {
    const newDataPoint: BarChartDataPoint = {
      name: newLabel,
      value: newValue,
    };
    onUpdate(newDataPoint);
    setNewLabel('');
    setNewValue(0);
  };

  return (
    <div className="flex items-center space-x-2">
      <InputField
        type="text"
        name="Label"
        value={newLabel}
        onChange={e => setNewLabel(e.target.value)}
        placeholder="Label (required)"
        className="flex-grow"
      />
      <InputField
        type="number"
        name="Value"
        value={newValue}
        onChange={e => setNewValue(Number(e.target.value))}
        placeholder="Value (required)"
        className="flex-grow"
      />
      <button
        type="button"
        onClick={handleAddDataPoint}
        className={`p-2 bg-green-600 text-white rounded-md 
            flex-shrink-0 hover:bg-green-700 active:bg-green-800 transition duration-200 
            ${!newLabel ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={!newLabel}
      >
        Add Data Point
      </button>
    </div>
  );
};

export default AddDataPoint;
