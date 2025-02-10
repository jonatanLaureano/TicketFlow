import { preferences } from "@/config/const";
import { FaChevronDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import ProfilePhoto from '../../../components/home/sections/profilePhoto';
import SocialMedia from '../../../components/home/sections/socialMedia';
import CollectiveData from '../../../components/home/sections/collectiveData';
import DataLocationOfTheCollective from '../../../components/home/sections/dataLocationOfTheCollective';
import RepresentativeData from '../../../components/home/sections/representativeData';
import { useState } from 'react';

interface FormData {
  representanteNombre: string;
  representanteApellido: string;
  tipoDocumento: string;
  numeroDocumento: string;
  fechaNacimiento: Date | undefined; 
  sexo: string;
  nombre: string;
  categoria: string;
  email: string;
  celular: string;
  pais: string;
  ciudad: string;
  distrito: string;
  direccion: string;
}

export const Profile = () => {
  const location = useLocation();

  const [formData, setFormData] = useState<FormData>({
    representanteNombre: 'Eduardo Jose',
    representanteApellido: 'Gonzales Rivera',
    tipoDocumento: 'DNI',
    numeroDocumento: '75847512',
    fechaNacimiento: new Date('1990-06-01'), 
    sexo: 'Masculino',
    nombre: 'Grone',
    categoria: 'Rap',
    email: 'grub123@gmail.com',
    celular: '958746273',
    pais: 'Perú',
    ciudad: 'Lima',
    distrito: 'Victoria',
    direccion: 'Av. Las Palmas 18098 calle 2',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date: Date | undefined) => {
    setFormData((prevData) => ({
      ...prevData,
      fechaNacimiento: date, 
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
    <div>
      {/* Menú de navegación */}
      <ul className="flex items-center gap-0 border-b-2 border-gray-500 pb-2 ml-10 mr-10 mt-32">
        {preferences.map(({ name, path }, index) => (
          <li key={name} className="relative group">
            <Link
              to={path}
              className={`text-gray-500 font-small transition-all duration-300 p-12
              ${location.pathname === path ? 'text-[#472280]' : ''}
              `}
            >
              {name}
              {index < 2 && <FaChevronDown className="inline ml-2 text-gray-500" />}
            </Link>
            <span
              className={`absolute left-0 bottom-[-8px] w-full h-[2px] bg-[#472280] transition-all duration-300
              ${location.pathname === path ? 'block' : 'hidden group-hover:block'}`}
            ></span>
          </li>
        ))}
      </ul>

      {/* Formulario de perfil */}
      <form onSubmit={handleSubmit} className="max-w-[100rem] mx-auto p-6 mt-12">
        <div className="flex flex-col lg:flex-row lg:gap-6">
          {/* Profile Photo and Social Media */}
          <div className="lg:w-1/4">
            <ProfilePhoto />
            <SocialMedia />
          </div>

          {/* Form details */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold mb-6 text-center">Mi información</h2>
            
            <h3 className="text-xl font-semibold mb-6 mt-12">Datos del colectivo:</h3>
            <CollectiveData formData={formData} handleChange={handleChange} />

            <h3 className="text-xl font-semibold mb-6 mt-12">Datos ubicación del colectivo:</h3>
            <DataLocationOfTheCollective formData={formData} handleChange={handleChange} />

            <h3 className="text-xl font-semibold mb-6 mt-12">Datos del representante colectivo:</h3>
            <RepresentativeData
              formData={formData}
              handleChange={handleChange}
              handleDateChange={handleDateChange} // Pasa el manejador de la fecha
            />

            {/* Botones */}
            <div className="flex justify-end mt-6">
              <button type="button" className="px-20 py-2 mr-6 border-2 border-[#6F2DA8] bg-white rounded">
                Anular cambios
              </button>
              <button type="submit" className="px-20 py-2 bg-[#6F2DA8] text-white rounded">
                Guardar cambios
              </button>
            </div>
          </div>
        </div>
      </form>

    </div>
  );
};
