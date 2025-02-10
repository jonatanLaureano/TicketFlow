import React from 'react';
import { CustomDatePicker } from './customDatePicker';

interface RepresentativeDataProps {
  formData: {
    representanteNombre: string;
    representanteApellido: string;
    tipoDocumento: string;
    numeroDocumento: string;
    fechaNacimiento: Date | undefined; 
    sexo: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleDateChange: (date: Date | undefined) => void; 
}

const RepresentativeData: React.FC<RepresentativeDataProps> = ({ formData, handleChange, handleDateChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div>
        <label className="block mb-2">Nombres</label>
        <input
          type="text"
          name="representanteNombre"
          value={formData.representanteNombre}
          onChange={handleChange}
          className="w-full p-2 border-2 border-[#6F2DA8] rounded"
        />
      </div>

      <div>
        <label className="block mb-2">Apellidos</label>
        <input
          type="text"
          name="representanteApellido"
          value={formData.representanteApellido}
          onChange={handleChange}
          className="w-full p-2 border-2 border-[#6F2DA8] rounded"
        />
      </div>

      <div>
        <label className="block mb-2">Tipo de documento</label>
        <select
          name="tipoDocumento"
          value={formData.tipoDocumento}
          onChange={handleChange}
          className="w-full p-2 border-2 border-[#6F2DA8] rounded"
        >
          <option value="DNI">DNI</option>
          <option value="Pasaporte">Pasaporte</option>
          <option value="Carnet de Extranjería">Carnet de Extranjería</option>
        </select>
      </div>

      <div>
        <label className="block mb-2">Número de documento</label>
        <input
          type="text"
          name="numeroDocumento"
          value={formData.numeroDocumento}
          onChange={handleChange}
          className="w-full p-2 border-2 border-[#6F2DA8] rounded"
        />
      </div>

      <div>
        <label className="block mb-2">Fecha de Nacimiento</label>
        <CustomDatePicker value={formData.fechaNacimiento} onChange={handleDateChange} />
      </div>

      <div>
        <label className="block mb-2">Sexo</label>
        <select
          name="sexo"
          value={formData.sexo}
          onChange={handleChange}
          className="w-full p-2 border-2 border-[#6F2DA8] rounded"
        >
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
    </div>
  );
};

export default RepresentativeData;

