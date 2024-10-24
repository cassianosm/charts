import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface RemoveButtonProps {
  onClick: () => void;
  ariaLabel: string;
}

const RemoveButton: React.FC<RemoveButtonProps> = ({ onClick, ariaLabel }) => {
  return (
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
};

export default RemoveButton;
