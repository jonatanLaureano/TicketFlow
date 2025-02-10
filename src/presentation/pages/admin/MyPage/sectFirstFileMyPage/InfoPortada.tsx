import { SectionCarga } from "./SectionCarga";

interface SectionsPage {
    title: string;
    pholder: string;
}
interface InfoPortadaProps {
    openModalHandler: () => void;
}

export const InfoPortada = ({ openModalHandler }: InfoPortadaProps) => {
    const spage: SectionsPage[] = [
        { title: "Descripción en portada", pholder: "Ingresa una breve" },
        {
            title: "Página en Facebook(URL)",
            pholder: "https://www.facebook.com/",
        },
        { title: "Canal de Youtube(URL)", pholder: "https://www.youtube.com/" },
        {
            title: "Cuenta de Instagram(URL)",
            pholder: "https://www.instagram.com/",
        },
    ];

    return (
        <>
            <SectionCarga props="Subir portada" onClick={openModalHandler} />
            {spage.map(({ title, pholder }, index) => (
                <section className="my-5" key={index}>
                    <p className="my-2">
                        {title}
                        <b className="text-red-700">*</b>
                    </p>
                    <input
                        className="w-full p-2 border-2 border-gray-400 rounded-sm"
                        placeholder={pholder}
                        name=""
                        id=""
                    ></input>
                    <p className="text-xs">
                        Puede encontrar el URL en la parte superior de su
                        navegador{" "}
                        <a
                            className="text-purple-700 underline"
                            href={"/questions"}
                        >
                            aquí
                        </a>
                    </p>
                </section>
            ))}
        </>
    );
};
