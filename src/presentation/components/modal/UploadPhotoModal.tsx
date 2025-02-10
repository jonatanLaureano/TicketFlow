import React from 'react';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '../ui/dialog';

interface UploadPhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UploadPhotoModal: React.FC<UploadPhotoModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md pl-10 pr-10 bg-white">
        <DialogHeader className="pt-10">
          <DialogTitle className="font-bold mt-1.5 mb-4">
            Carga foto de perfil
          </DialogTitle>
        </DialogHeader>

        <div className="flex justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fill-rule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
</svg>

        </div>

        <DialogFooter className="flex justify-center">
          <Button
            type="button"
            className="bg-[#624393] hover:bg-[#472280] px-10 text-white"
            onClick={onClose}
          >
            Cargar Foto
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UploadPhotoModal;
