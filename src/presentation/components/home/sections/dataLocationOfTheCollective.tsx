import React from 'react';

interface DataLocationProps {
  formData: {
    pais: string;
    ciudad: string;
    distrito: string;
    direccion: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const DataLocationOfTheCollective: React.FC<DataLocationProps> = ({ formData, handleChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div>
        <label className="block mb-2">País</label>
        <select
          name="pais"
          value={formData.pais}
          onChange={handleChange}
          className="w-full p-2 border-2 border-[#6F2DA8] rounded"
        >
          <option value="Perú">Perú</option>
          <option value="Chile">Chile</option>
          <option value="Argentina">Argentina</option>
        </select>
      </div>

      <div>
        <label className="block mb-2">Ciudad</label>
        <select
          name="ciudad"
          value={formData.ciudad}
          onChange={handleChange}
          className="w-full p-2 border-2 border-[#6F2DA8] rounded"
        >
          <option value="Lima">Lima</option>
          <option value="Arequipa">Arequipa</option>
          <option value="Cusco">Cusco</option>
        </select>
      </div>

      <div>
        <label className="block mb-2">Distrito</label>
        <select
          name="distrito"
          value={formData.distrito}
          onChange={handleChange}
          className="w-full p-2 border-2 border-[#6F2DA8] rounded"
        >
          <option value="Victoria">Victoria</option>
          <option value="Miraflores">Miraflores</option>
          <option value="San Isidro">San Isidro</option>
        </select>
      </div>

      <div>
        <label className="block mb-2">Dirección</label>
        <input
          type="text"
          name="direccion"
          value={formData.direccion}
          onChange={handleChange}
          className="w-full p-2 border-2 border-[#6F2DA8] rounded"
        />
      </div>
    </div>
  );
};

export default DataLocationOfTheCollective;
