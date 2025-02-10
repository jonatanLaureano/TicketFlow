export function AboutCard() {
  return (
    <div className="flex flex-col items-center bg-purple-200 p-4 my-20 mx-2">
      <h2 className="text-4xl font-semibold mb-4 text-center">Lorem Ipsum</h2>
      <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-52 my-10">
        <div className="flex flex-col items-center mb-8 sm:mb-0">
          <img
            src="https://i1.sndcdn.com/artworks-000640789876-3285m1-t500x500.jpg"
            alt="Descripción de la imagen 1"
            className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] h-auto rounded-3xl"
          />
          <p className="mt-4 text-center">Descripción de la imagen 1</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://img.freepik.com/vector-premium/panda-lindo-tocando-musica-electronica-dj-auriculares-dibujos-animados-vector-icono-ilustracion-musica-animal_138676-4284.jpg"
            alt="Descripción de la imagen 2"
            className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] h-auto rounded-3xl"
          />
          <p className="mt-4 text-center">Descripción de la imagen 2</p>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
