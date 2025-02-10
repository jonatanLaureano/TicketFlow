import React from 'react';

interface CollectiveDataProps {
  formData: {
    nombre: string;
    categoria: string;
    email: string;
    celular: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const CollectiveData: React.FC<CollectiveDataProps> = ({ formData, handleChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div>
        <label className="block mb-2">Nombre</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="w-full mb-6 p-2 border-2 border-[#6F2DA8] rounded"
        />
      </div>

      <div>
        <label className="block mb-2">Categoría</label>
        <select
          name="categoria"
          value={formData.categoria}
          onChange={handleChange}
          className="w-full mb-6 p-2 border-2 border-[#6F2DA8] rounded"
        >
          <option value="Rap">Rap</option>
          <option value="Rock">Rock</option>
          <option value="Pop">Pop</option>
        </select>
      </div>

      <div>
        <label className="block mb-2">Gmail</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border-2 border-[#6F2DA8] rounded"
        />
      </div>

      <div>
        <label className="block mb-2">Celular</label>
        <input
          type="text"
          name="celular"
          value={formData.celular}
          onChange={handleChange}
          className="w-full p-2 border-2 border-[#6F2DA8] rounded"
        />
      </div>
    </div>
  );
};

export default CollectiveData;
