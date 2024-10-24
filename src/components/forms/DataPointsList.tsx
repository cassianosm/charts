import React from 'react';
import { BarChartDataPoint } from '../../models/transformedChartTypes';
import DataPoint from './DataPoint';

interface DataPointListProps {
  data: BarChartDataPoint[];
  onUpdate: (updatedData: BarChartDataPoint[]) => void;
}

/**
 * DataPointList component renders a list of DataPoint components,
 * allowing users to edit, remove, and reorder data points.
 *
 * @component
 * @param {DataPointListProps} props - Props for the DataPointList component.
 * @param {BarChartDataPoint[]} props.data - The array of data points to display.
 * @param {(updatedData: BarChartDataPoint[]) => void} props.onUpdate - Function to handle updates to the data points.
 *
 * @returns {JSX.Element} A UI element displaying a list of data points.
 */
const DataPointList: React.FC<DataPointListProps> = ({
  data,
  onUpdate,
}: DataPointListProps): JSX.Element => {
  const handleDataChange = (
    index: number,
    field: 'label' | 'value',
    newValue: string | number,
  ) => {
    const updatedData = [...data];
    if (field === 'label') {
      updatedData[index].name = newValue as string;
    } else {
      updatedData[index].value = newValue as number;
    }
    onUpdate(updatedData);
  };

  const handleOrderChange = (
    index: number,
    direction: 'moveUp' | 'moveDown',
  ) => {
    if (direction === 'moveUp') {
      handleMoveUp(index);
    } else {
      handleMoveDown(index);
    }
  };

  const handleMoveUp = (index: number) => {
    if (index > 0) {
      const updatedData = [...data];
      const [movedItem] = updatedData.splice(index, 1);
      updatedData.splice(index - 1, 0, movedItem); // Move item up
      onUpdate(updatedData);
    }
  };

  const handleMoveDown = (index: number) => {
    if (index < data.length - 1) {
      const updatedData = [...data];
      const [movedItem] = updatedData.splice(index, 1);
      updatedData.splice(index + 1, 0, movedItem); // Move item down
      onUpdate(updatedData);
    }
  };

  const handleRemoveDataPoint = (index: number) => {
    const updatedData = data.filter((_, i) => i !== index);
    onUpdate(updatedData);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {data.map((point, index) => (
        <DataPoint
          key={index}
          index={index}
          point={point}
          onChange={handleDataChange}
          onRemove={handleRemoveDataPoint}
          onChangeOrder={handleOrderChange}
          canMoveUp={index !== 0}
          canMoveDown={index < data.length - 1}
        />
      ))}
    </div>
  );
};

export default DataPointList;
