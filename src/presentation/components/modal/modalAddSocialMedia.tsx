import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '../ui/dialog';
import { Input } from '../ui/input';

interface ModalAddSocialMediaProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalAddSocialMedia: React.FC<ModalAddSocialMediaProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md pl-10 pr-10 bg-white">
        <DialogHeader className="pt-10">
          <DialogTitle className="font-bold mt-1.5 mb-4 grid-cols-1">
            Agrega el link de tu red social
            <p className="text-sm font-normal mt-3">
              Otra red social como YouTube, Instagram, etc.
            </p>
          </DialogTitle>
        </DialogHeader>

        <Input
          type="text"
          placeholder="https://www.youtube.com/@tuRedSocial"
          className="mt-4"
        />

        <DialogFooter className="flex justify-end mt-7 mb-9">
          <Button
            type="submit"
            className="hover:bg-[#472280] bg-[#624393] px-10"
            onClick={onClose} // Cierra el modal al hacer clic en "Guardar"
          >
            Guardar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
