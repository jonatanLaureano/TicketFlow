import { TypographyP } from "../../shared/typography";

export const SectionCreate = () => {
    return (
        <div className="w-full h-[600px] md:h-[800px] mb-16 border-2 relative mt-10">
            <div className="absolute inset-0">
                <img
                    src="https://img.redbull.com/images/c_fill,g_auto,w_1200,h_630/f_auto,q_auto/redbullcom/2020/4/8/gjfhxqlahh8nzdl2mqmc/final-internacional-batalla-2019" // Cambia esto por la ruta de tu imagen
                    alt="Evento"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent">
                <div className="flex items-center h-full md:p-8">
                    <div className="text-white sm:m-32 ">
                        <TypographyP className="uppercase font-bungee text-yellow-500 text-3xl m-2 md:text-7xl sm:text-5xl mb-2">

                            CREA Y VENDE TU EVENTO
                        </TypographyP>

                        <p className="md:text-3xl mb-8 mt-8 text-3xl m-2">
                            30 mil espectadores en una noche. <br />
                            Más de 2 millones de entradas vendidas. <br />
                            40 mil eventos.
                        </p>
                        <button className='bg-[#472280D9] text-white font-medium m-3 p-3 md:px-12 
                        md:py-2.5 md:text-4xl border border-[#472280D9] rounded-md hover:bg-purple-900'>
						            Registrarme ya!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
