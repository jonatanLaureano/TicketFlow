export default function TendenciaLayout() {
  const overlayData = [
    { category: "Entretenimiento", date: "21 de agosto, 2023", title: "Rap en Latinoamérica", subtitle: "Todo lo que debes conocer" },
    { category: "Entretenimiento", date: "21 de agosto, 2023", title: "Rap en Latinoamérica", subtitle: "Todo lo que debes conocer" },
    { category: "Entretenimiento", date: "21 de agosto, 2023", title: "Rap en Latinoamérica", subtitle: "Todo lo que debes conocer" },
    { category: "Entretenimiento", date: "21 de agosto, 2023", title: "Rap en Latinoamérica", subtitle: "Todo lo que debes conocer" },

     
    // Add more objects as needed for each overlay
  ];

  return (
    <div className="mx-8 p-2 bg-white text-black ">
      <div className="grid grid-cols-3 gap-4 min-h-screen">
        
        {/* Left side images with card style */}
        <div className="col-span-1 grid grid-rows-4 space-y-4 justify-end">
          {[...Array(4)].map((_, index) => (
            <div
              key={`left-${index}`}
              className="border  row-span-1 h-44 w-64 overflow-hidden relative rounded-md shadow-xl"
            >
              <img
                className="w-full h-3/5 object-cover"
                src="https://www.visitphilly.com/wp-content/uploads/2024/03/the-mann-center-concert-photo-by-snicole-for-the-mann-2200x1237px.jpg"
                alt=""
              />
              <div className="bg-white p-2 text-black text-xs ">
                <span className="font-bold">{overlayData[index]?.category}</span> / {overlayData[index]?.date}
                <div className="font-bold mt-1">{overlayData[index]?.title}</div>
                <p>{overlayData[index]?.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="col-span-1 grid grid-rows-7 space-y-4">
          <div className="border row-span-5  h-full overflow-hidden relative">
            <img
              className="h-full object-cover"
              src="https://www.visitphilly.com/wp-content/uploads/2024/03/the-mann-center-concert-photo-by-snicole-for-the-mann-2200x1237px.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white mb-9">
              <h2 className="text-4xl font-bold">PLAZA DE REYES: ANIVERSARIO IS</h2>
            </div>
          </div>
          <div className="border row-span-2  w-full h-full overflow-hidden relative">
            <img
              className="h-full object-cover"
              src="https://www.visitphilly.com/wp-content/uploads/2024/03/the-mann-center-concert-photo-by-snicole-for-the-mann-2200x1237px.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white mb-9">
            <h2 className="text-4xl font-bold">LO MEJOR DE LOS ARTISTAS</h2>
            </div>
          </div>
        </div>

        {/* Right side images with card style */}
        <div className="grid grid-rows-4 col-span-1 space-y-4 justify-start">
          {[...Array(4)].map((_, index) => (
            <div
              key={`right-${index}`}
              className="border row-span-1  h-44 w-64 overflow-hidden relative rounded-md shadow-xl"
            >
              <img
                className="w-full h-3/5 object-cover"
                src="https://www.visitphilly.com/wp-content/uploads/2024/03/the-mann-center-concert-photo-by-snicole-for-the-mann-2200x1237px.jpg"
                alt=""
              />
              <div className="bg-white p-2 text-black text-xs ">
                <span className="font-bold">{overlayData[index]?.category}</span> / {overlayData[index]?.date}
                <div className="font-bold mt-1">{overlayData[index]?.title}</div>
                <p>{overlayData[index]?.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
