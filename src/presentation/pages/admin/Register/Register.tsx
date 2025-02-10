import React from "react";

const Register: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
    
    
      <div className="mt-20 text-left w-[80%] max-w-[8000px]">
        <h2 className="text-3xl font-bold">Registrarse</h2>
        <p className="text-gray-600 text-left w-[80%] max-w-[8000px] mt-2">
          ¿Cómo desea registrarse? Tenemos dos tipos de usuario (usuario normal y usuario colectivo)
          <br />
          Podrá tener como máximo dos tipos de cuenta, uno de cada tipo
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row gap-60 mt-10">
        {/* Usuario Card */}
        <div className="w-96 bg-purple-100 rounded-lg shadow-lg p-16 flex flex-col items-center">
          <h3 className="text-2xl font-bold text-center mb-3">Usuario</h3>
          <img
            src="https://i.pinimg.com/originals/ee/f2/12/eef212a88097f7d535daa5cf4ab99324.png"
            alt="Usuario"
            className="w-40 h-40 object-cover rounded-lg mb-4"
          />
          <p className="text-center text-gray-700 mb-12">
            ¡Únete a la diversión sin límites! Regístrate ahora para asegurar tus entradas y ser parte de un evento que nunca olvidarás.
          </p>
          <button className="bg-white text-purple-900 font-bold w-60 py-2 text-1xl border-4 border-purple-900 rounded-sm hover:bg-purple-900 hover:text-white">
            Crear Cuenta
          </button>
        </div>

        {/* Colectivo Card */}
        <div className="w-96 bg-purple-100 rounded-lg shadow-lg p-16 flex flex-col items-center">
          <h3 className="text-2xl font-bold text-center mb-3">Colectivo</h3>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ALP69hcSMrI-Yl6Zi2IEBwu6KsiPo9yQYg&s"
              alt="Logo 1"
              className="w-20 h-20 object-cover rounded-lg"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ALP69hcSMrI-Yl6Zi2IEBwu6KsiPo9yQYg&s"
              alt="Logo 2"
              className="w-20 h-20 object-cover rounded-lg"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ALP69hcSMrI-Yl6Zi2IEBwu6KsiPo9yQYg&s"
              alt="Logo 3"
              className="w-20 h-20 object-cover rounded-lg"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ALP69hcSMrI-Yl6Zi2IEBwu6KsiPo9yQYg&s"
              alt="Logo 4"
              className="w-20 h-20 object-cover rounded-lg"
            />
          </div>
          <p className="text-center text-gray-700 mb-10">
            ¡Haz que tu colectivo brille en el escenario! Registra tu grupo y asegura entradas para el concierto que definirá tu experiencia musical.
          </p>
          <button className="bg-white text-purple-900 font-bold w-60 py-2 text-1xl border-4 border-purple-900 rounded-sm hover:bg-purple-900 hover:text-white">
            Crear Cuenta
          </button>
        </div>
      </div>

      <div className="flex justify-between w-full max-w-[1500px] mx-auto mt-16 text-purple-600">
        <a href="/" className="flex items-center gap-2 text-purple-900">
          <span className="text-lg">🏠</span> Ir a página principal
        </a>
        <a href="/login" className="hover:underline font-bold text-purple-900">
          ¿Ya tienes una cuenta? Inicia sesión ahora
        </a>
      </div>

      
    </div>
  );
};

export default Register;
