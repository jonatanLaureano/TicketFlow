import React from "react";

interface FreestyleEventCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const FreestyleEventCard: React.FC<FreestyleEventCardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

const FreestyleEventCardDemo: React.FC = () => {
  const eventData = {
    imageUrl: "/api/placeholder/400/200",
    title: "Freestyle Master Series",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  };

  return (
    <div className="p-4">
      <FreestyleEventCard {...eventData} />
    </div>
  );
};

export default FreestyleEventCardDemo;
