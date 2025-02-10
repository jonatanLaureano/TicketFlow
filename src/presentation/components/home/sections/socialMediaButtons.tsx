import React from 'react';

interface SocialMediaButtonsProps {
  onEdit: () => void;
}

const SocialMediaButtons: React.FC<SocialMediaButtonsProps> = ({ onEdit }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[23px]">
      <span className="flex space-x-4">
        <button
          className="flex items-center"
          style={{ filter: 'invert(15%) sepia(66%) saturate(4007%) hue-rotate(244deg) brightness(84%) contrast(94%)' }}
          onClick={onEdit}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
            alt="Editar"
            className="w-4 h-4 mr-1"
          />
          Editar
        </button>
        <button
          className="flex items-center"
          style={{ filter: 'invert(21%) sepia(100%) saturate(5861%) hue-rotate(360deg) brightness(92%) contrast(104%)' }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png"
            alt="Eliminar"
            className="w-4 h-4 mr-1"
          />
          Eliminar
        </button>
      </span>
    </div>
  );
};

export default SocialMediaButtons;

