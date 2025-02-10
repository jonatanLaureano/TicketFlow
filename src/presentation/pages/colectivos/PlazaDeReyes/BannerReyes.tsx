import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function BannerReyes() {
  return (
    <div
      className="relative bg-cover bg-center h-[540px]"
      style={{
        backgroundImage:
          "url(https://i0.wp.com/urbanroosters.news/wp-content/uploads/2023/07/banner-cartel-reyes-de-plaza.png?resize=1024%2C550&ssl=1)",
      }}
    >
      <div className="bg-black bg-opacity-60 h-full flex items-center justify-start">
        <div className="text-white p-6 ml-[40px] text-left w-11/12 md:w-2/5">
          <h1 className="text-3xl md:text-4xl text-left text-yellow-500 font-bungee mt-20 mb-6 mx-2">
            Plaza de Reyes
          </h1>
          <p className="text-lg md:text-2xl text-left font-nunito mb-4 mx-2">
            Somos un diverso y entusiasta colectivo de jóvenes amantes del
            hip-hop provenientes de distintos barrios de la ciudad.
          </p>
          <p className="text-lg md:text-xl text-left my-6 mx-2">
            Nuestras redes sociales
          </p>
          <div className="flex space-x-6 mt-6 ml-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 flex items-center justify-center rounded-full w-16 h-16"
            >
              <span className="text-3xl md:text-4xl">
                <FaFacebook color="purple" />
              </span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 flex items-center justify-center rounded-full w-16 h-16"
            >
              <span className="text-3xl md:text-4xl">
                <FaInstagram color="purple" />
              </span>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 flex items-center justify-center rounded-full w-16 h-16"
            >
              <span className="text-3xl md:text-4xl">
                <FaYoutube color="purple" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerReyes;
