import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "../../../../../components/ui/dialog";
import { Button } from "../../../../../components/ui/button";
interface InfoPortadaDialogProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
}

export const DialogFirstFileMyPage = ({
    isOpen,
    onClose,
    title,
}: InfoPortadaDialogProps) => {
    const handleOpenFileExplorer = () => {
        const input = document.createElement("input");
        input.type = "file";
        input.click();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl p-8 bg-white rounded-lg">
                <DialogHeader>
                    <DialogTitle className="mb-4 text-2xl text-center">
                        {title}
                    </DialogTitle>
                </DialogHeader>

                {/* Imagen de portada */}
                <div className="flex flex-col items-center mb-6">
                    <div className="flex items-center justify-center w-full h-48 bg-gray-200 rounded-md">
                        <span className="text-gray-500">
                            Aún no tienes una portada cargada
                        </span>
                    </div>
                </div>

                {/* Subir imagen desde almacenamiento local */}
                <div className="mb-0">
                    <p className="mb-2 ">
                        Sube una foto desde tu almacenamiento local
                    </p>
                    <button
                        onClick={handleOpenFileExplorer}
                        className="p-0 font-semibold text-purple-700 underline bg-transparent"
                    >
                        Examinar
                    </button>
                    <input type="file" className="hidden" />
                </div>

                {/* Opción de enlace para la portada */}
                <div className="flex items-center justify-center">
                    <div className="flex items-center justify-center pt-0 mt-0 mb-0 w-80">
                        <hr className="flex-grow border-t border-gray-300" />
                        <span className="mx-3">o</span>
                        <hr className="flex-grow border-t border-gray-300" />
                    </div>
                </div>

                {/* Campo de entrada para el enlace */}
                <div className="mb-0">
                    <p className="mb-2 ">Link de foto para portada</p>
                    <input
                        type="text"
                        placeholder="Aquí pega tu enlace"
                        className="w-full p-2 border-2 border-gray-400 rounded-sm"
                    />
                    <p className="mt-1 text-xs text-gray-500">
                        Pega tu enlace copiado para cargar la foto
                    </p>
                </div>

                <div className="flex items-center justify-center">
                    <DialogFooter className="flex justify-start mt-0">
                        <Button
                            type="submit"
                            onClick={onClose}
                            className=" bg-[#624393] hover:bg-[#472280]  px-9 py-5 text-white"
                        >
                            Guardar
                        </Button>
                    </DialogFooter>
                </div>
            </DialogContent>
        </Dialog>
    );
};
