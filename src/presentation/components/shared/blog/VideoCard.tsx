import React from 'react';

interface YouTubeThumbnailProps {
  url: string;
}

const YouTubeThumbnail: React.FC<YouTubeThumbnailProps> = ({ url }) => {
  // Función para extraer el ID del video de la URL de YouTube
  const getYouTubeVideoId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeVideoId(url);

  if (!videoId) {
    return <div>URL de YouTube inválida</div>;
  }

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img 
        src={thumbnailUrl} 
        alt="Miniatura de YouTube" 
        className="w-full"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Miniatura de YouTube</div>
        <p className="text-gray-700 text-base">
          ID del video: {videoId}
        </p>
      </div>
    </div>
  );
};

export default YouTubeThumbnail;