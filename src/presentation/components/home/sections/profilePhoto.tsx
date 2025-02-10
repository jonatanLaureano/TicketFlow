import React, { useState } from 'react';
import UploadPhotoModal from '@/presentation/components/modal/UploadPhotoModal';

const ProfilePhoto: React.FC = () => {
  const [isUploadModalOpen, setUploadModalOpen] = useState(false);

  return (
    <div className="text-center mb-6">
      <h2 className="text-xl font-bold mb-2">Perfil</h2>
      
      <div className="relative inline-block">
        <img
          src="src/presentation/components/home/sections/jojo.jpg"
          alt="Foto de perfil"
          className="w-36 h-auto rounded-full border sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72"
        />

        {/* Botón de cámara */}
        <button 
          className="absolute bottom-0 right-0 bg-yellow-400 rounded-full p-1 sm:p-2 border-2 border-white shadow-md flex items-center justify-center"
          onClick={() => setUploadModalOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-12 h-auto text-purple-800"
          >
            <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
            <path
              fillRule="evenodd"
              d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 bg-purple-800 text-white text-xl font-bold rounded-full w-7 h-7 flex items-center justify-center">
            +
          </span>
        </button>
      </div>

      <button className="block text-gray-400 mt-4 mx-auto hover:text-gray-600 transition duration-300">
        Eliminar Foto
      </button>

      {/* Modal de Carga de Foto */}
      <UploadPhotoModal 
        isOpen={isUploadModalOpen} 
        onClose={() => setUploadModalOpen(false)} 
      />
    </div>
  );
};

export default ProfilePhoto;


