import { Button } from "@/components/ui/button";
import { SectionCarga } from "./SectionCarga";

interface InfoPortadaProps {
    openModalHandler: () => void;
}

export const SecVideos = ({ openModalHandler }: InfoPortadaProps) => {
    return (
        <>
            <SectionCarga props="Subir video" onClick={openModalHandler} />
            <div className="flex items-center justify-between">
                <Button className="px-10 py-4" variant={"purple"}>
                    Ver videos
                </Button>
                <span className="mr-4 text-lg font-medium">
                    Videos subidos {"0/8"}
                </span>
            </div>
        </>
    );
};
