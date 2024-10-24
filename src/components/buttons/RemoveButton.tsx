import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface RemoveButtonProps {
  onClick: () => void;
  ariaLabel: string;
}

/**
 * RemoveButton component renders a button with a trash icon.
 *
 * @component
 * @param {RemoveButtonProps} props - Props for the RemoveButton component.
 * @param {() => void} props.onClick - Function to handle button click event.
 * @param {string} props.ariaLabel - Accessibility label for the button.
 *
 * @returns {JSX.Element} A button element with a trash icon.
 */
const RemoveButton: React.FC<RemoveButtonProps> = ({
  onClick,
  ariaLabel,
}: RemoveButtonProps): JSX.Element => (
  <button
    type="button"
    onClick={onClick}
    className="m-1 p-2 bg-red-600 text-white rounded-md 
             hover:bg-red-700 active:bg-red-800 transition duration-200"
    aria-label={ariaLabel}
  >
    <FontAwesomeIcon icon={faTrash} />
  </button>
);

export default RemoveButton;
