import React from 'react';
import { BarChartDataPoint } from '../../models/transformedChartTypes';
import UpButton from '../buttons/UpButton';
import DownButton from '../buttons/DownButton';
import RemoveButton from '../buttons/RemoveButton';
import InputField from './InputField'; // Import the InputField component

interface DataPointProps {
  index: number;
  point: BarChartDataPoint;
  onChange: (
    index: number,
    field: 'label' | 'value',
    newValue: string | number,
  ) => void;
  onChangeOrder: (index: number, direction: 'moveUp' | 'moveDown') => void;
  onRemove: (index: number) => void;
  canMoveUp: boolean;
  canMoveDown: boolean;
}

/**
 * DataPoint component represents a single data point in the chart,
 * allowing users to edit its label and value, as well as move or remove it.
 *
 * @component
 * @param {DataPointProps} props - Props for the DataPoint component.
 * @param {number} props.index - The index of the data point in the list.
 * @param {{ name: string; value: number }} props.point - The data point object containing name and value.
 * @param {(index: number, field: string, value: string | number) => void} props.onChange - Function to handle changes in label and value.
 * @param {(index: number, action: 'moveUp' | 'moveDown') => void} props.onChangeOrder - Function to change the order of the data point.
 * @param {(index: number) => void} props.onRemove - Function to remove the data point from the list.
 * @param {boolean} props.canMoveUp - Flag indicating if the data point can be moved up.
 * @param {boolean} props.canMoveDown - Flag indicating if the data point can be moved down.
 *
 * @returns {JSX.Element} A UI element representing a single data point with input fields and buttons.
 */
const DataPoint: React.FC<DataPointProps> = ({
  index,
  point,
  onChange,
  onChangeOrder,
  onRemove,
  canMoveUp,
  canMoveDown,
}: DataPointProps): JSX.Element => {
  return (
    <div className="flex items-center space-x-2">
      <InputField
        type="text"
        name={`label-${index}`}
        value={point.name}
        onChange={e => onChange(index, 'label', e.target.value)}
        className="flex-grow"
      />
      <InputField
        type="number"
        name={`value-${index}`}
        value={point.value}
        onChange={e => onChange(index, 'value', Number(e.target.value))}
        className="flex-grow"
      />
      <UpButton
        onClick={() => onChangeOrder(index, 'moveUp')}
        disabled={!canMoveUp}
        ariaLabel="Move item up"
      />
      <DownButton
        onClick={() => onChangeOrder(index, 'moveDown')}
        disabled={!canMoveDown}
        ariaLabel="Move item down"
      />
      <RemoveButton onClick={() => onRemove(index)} ariaLabel="Remove item" />
    </div>
  );
};

export default DataPoint;
