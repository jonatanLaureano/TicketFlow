import React from 'react';
import SocialMediaButtons from './socialMediaButtons';

interface SocialMediaItemProps {
  name: string;
  icon: string;
  link: string;
  onEdit: () => void;
}

const SocialMediaItem: React.FC<SocialMediaItemProps> = ({ name, icon, link, onEdit }) => {
  return (
    <li className="mb-5 relative group">
      <div className="bg-white p-5 rounded-[23px] w-full flex flex-row shadow-xl relative justify-center items-center"> 

        <div className="flex-shrink-0">
          <img src={icon} alt={name} className="w-12 h-auto" /> 
        </div>
        
        <div className="ml-6 flex flex-col justify-center"> 
          <span className="font-medium text-gray-700 text-lg mb-2">{name}</span> 
          <span className="text-sm text-gray-500">{link}</span> 
        </div>

        <SocialMediaButtons onEdit={onEdit} />
        
      </div>
    </li>
  );
};

export default SocialMediaItem;

