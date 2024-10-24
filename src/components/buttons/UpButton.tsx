import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

interface UpButtonProps {
  onClick: () => void;
  disabled: boolean;
  ariaLabel: string;
}

/**
 * UpButton component renders a button with an arrow up icon.
 *
 * @component
 * @param {UpButtonProps} props - Props for the UpButton component.
 * @param {() => void} props.onClick - Function to handle button click event.
 * @param {boolean} props.disabled - Flag to disable the button.
 * @param {string} props.ariaLabel - Accessibility label for the button.
 *
 * @returns {JSX.Element} A button element with an arrow up icon.
 */
const UpButton: React.FC<UpButtonProps> = ({
  onClick,
  disabled,
  ariaLabel,
}: UpButtonProps): JSX.Element => (
  <button
    type="button"
    onClick={onClick}
    className={`m-1 p-2 rounded-md 
        ${
          disabled
            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
            : 'bg-gray-400 text-white hover:bg-gray-500 active:bg-gray-600 transition duration-200'
        }`}
    aria-label={ariaLabel}
    disabled={disabled}
  >
    <FontAwesomeIcon icon={faArrowUp} className="text-gray-600" />
  </button>
);

export default UpButton;
