import { Button } from "@/components/ui/button";
import { SectionCarga } from "./SectionCarga";

interface InfoPortadaProps {
    openModalHandler: () => void;
}

export const InfoHistory = ({ openModalHandler }: InfoPortadaProps) => {
    const models: string[] = ["Modelo 1", "Modelo 2", "Modelo 3"];
    return (
        <>
            <SectionCarga props="Subir foto" onClick={openModalHandler} />
            <div className="flex items-center justify-between">
                <Button className="px-10 py-4" variant={"purple"}>
                    Ver fotos
                </Button>
                <span className="mr-4 text-lg font-medium">
                    Fotos subidas {"0/2"}
                </span>
            </div>
            <section className="mb-8">
                <p className="mt-3 mb-1">
                    Texto historia: <b className="text-red-700">*</b>
                </p>
                <textarea
                    className="w-full border-2 border-gray-500 rounded-sm"
                    placeholder=""
                    name=""
                    id=""
                ></textarea>
                <span className="flex justify-end text-xs">
                    Cantidad máxima de palabras {"x/300"}
                </span>
            </section>
            <section>
                <p>Elige el tipo de estructura</p>
                {models.map((model, index) => (
                    <Button
                        className="px-10 mt-2 mb-20 text-gray-500 hover:bg-transparent hover:border-purple-700 hover:text-purple-700"
                        key={index}
                        variant="outline"
                        size="icon"
                    >
                        {model}
                    </Button>
                ))}
            </section>
        </>
    );
};
