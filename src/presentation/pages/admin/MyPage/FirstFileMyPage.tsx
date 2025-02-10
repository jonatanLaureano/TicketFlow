import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@radix-ui/react-accordion";
import { InfoPortada } from "./sectFirstFileMyPage/InfoPortada";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/presentation/components/ui/checkbox";
import { InfoHistory } from "./sectFirstFileMyPage/InfoHistory";
import { SecVideos } from "./sectFirstFileMyPage/SecVideos";
import { DialogFirstFileMyPage } from "./sectFirstFileMyPage/dialogsFirstFileMyPage/DialogFirstFileMyPage";
import { useState } from "react";
// import { InfoPortadaDialog } from "./sectFirstFileMyPage/dialogsFirstFileMyPage/InfoPortadaDialog"
export const FirstFileMyPage = () => {
    const [openModal, setOpenModal] = useState<string | null>(null);

    const triggers = [
        {
            title: "Información Portada",
            content: (
                <InfoPortada
                    openModalHandler={() => setOpenModal("InfoPortada")}
                />
            ),
        },
        {
            title: "Información Historica",
            content: (
                <InfoHistory
                    openModalHandler={() => setOpenModal("InfoHistory")}
                />
            ),
        },
        {
            title: "Videos",
            content: (
                <SecVideos openModalHandler={() => setOpenModal("SecVideos")} />
            ),
        },
    ];
    const handlerCloseModal = () => setOpenModal(null);

    return (
        <div>
            <b className="text-2xl font-semibold">Gestión de Página</b>
            <Accordion type="multiple" className="my-9">
                {triggers.map(({ title, content }, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`}>
                        <AccordionTrigger className="px-3 bg-[#4E4C4D] my-2 items-center px- 4 rounded-sm w-full flex justify-between py-2 text-white">
                            {title}
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </span>
                        </AccordionTrigger>
                        <AccordionContent>{content}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
            <div className="flex items-center justify-end mb-32 space-x-2">
                <Checkbox id="terms" />
                <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    ¿Desea habilitar los comentarios para su página?
                </label>
            </div>
            <div className="flex gap-4">
                <Button className="w-full" variant={"purple"}>
                    Guardar Cambios
                </Button>
                <Button className="w-full border-2 bg-transparent text-[#624393] hover:text-white border-[#624393] hover:bg-[#624393]">
                    Cancelar Cambios
                </Button>
            </div>
            {openModal === "InfoPortada" && (
                <DialogFirstFileMyPage
                    isOpen={true}
                    title={"Informacion de portada"}
                    onClose={handlerCloseModal}
                />
            )}
            {openModal === "InfoHistory" && (
                <DialogFirstFileMyPage
                    isOpen={true}
                    title={"Informacion historica"}
                    onClose={handlerCloseModal}
                />
            )}
            {openModal === "SecVideos" && (
                <DialogFirstFileMyPage
                    isOpen={true}
                    title={"Videos"}
                    onClose={handlerCloseModal}
                />
            )}
        </div>
    );
};
