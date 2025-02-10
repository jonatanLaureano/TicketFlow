import React, { useState } from 'react';
import SocialMediaItem from './socialMediaItem';
import { ModalAddSocialMedia } from '@/presentation/components/modal/modalAddSocialMedia';
import { ModalEditSocialMedia } from '@/presentation/components/modal/modalEditSocialMedia';

const SocialMedia: React.FC = () => {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">Redes Sociales</h2>
      <ul>
        <SocialMediaItem
          name="Facebook"
          icon="https://images.vexels.com/content/223136/preview/facebook-icon-social-media-8dfafe.png"
          link="https://www.facebook.com/PlazaDeReyes"
          onEdit={() => setEditModalOpen(true)}
        />

        <SocialMediaItem
          name="Instagram"
          icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png"
          link="https://www.instagram.com/plazadereyes"
          onEdit={() => setEditModalOpen(true)}
        />

        <SocialMediaItem
          name="YouTube"
          icon="https://cdn-icons-png.flaticon.com/512/174/174883.png"
          link="https://youtu.be/f7PUPSW27TQ"
          onEdit={() => setEditModalOpen(true)}
        />

        <li className="mb-4 relative group">
          <div className="bg-white p-4 rounded-[23px] w-full flex items-center justify-center shadow-xl relative">
            <span className="flex items-center">
              <button
                className="bg-gray-400 rounded-[10px] w-12 sm:p-2 shadow-md mr-6"
                onClick={() => setAddModalOpen(true)}
              >
                <span className="text-lg">+</span>
              </button>
              <span className="font-medium text-gray-700 text-lg">Agregar link</span>
            </span>
          </div>
        </li>
      </ul>

      <ModalAddSocialMedia
        isOpen={isAddModalOpen}
        onClose={() => setAddModalOpen(false)}
      />
      {isEditModalOpen && (
        <ModalEditSocialMedia isOpen={isEditModalOpen} setIsOpen={setEditModalOpen} />
      )}
    </div>
  );
};

export default SocialMedia;

