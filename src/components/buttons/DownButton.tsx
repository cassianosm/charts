import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

interface DownButtonProps {
  onClick: () => void;
  disabled: boolean;
  ariaLabel: string;
}

const DownButton: React.FC<DownButtonProps> = ({
  onClick,
  disabled,
  ariaLabel,
}) => {
  return (
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
      <FontAwesomeIcon icon={faArrowDown} className="text-gray-600" />
    </button>
  );
};

export default DownButton;
