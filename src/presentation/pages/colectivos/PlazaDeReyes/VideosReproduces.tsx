import VideoFrame from "./VideoFrame";
import { useState } from "react";

interface Video {
  routeVideoEmbeb: string;
  routeImg: string;
  title: string;
  date: string;
  place: string;
}

const listVideos: Video[] = [
  {
    routeVideoEmbeb: "https://www.youtube.com/embed/Dv4wgwgfxPU",
    routeImg: "../../../assets/battleLokoCaquinia.jpg",
    title: "Loko vs Caquiña",
    date: "18 abr 2023, 19:15pm",
    place: "centro civico",
  },
  {
    routeVideoEmbeb: "https://www.youtube.com/embed/Dv4wgwgfxPU",
    routeImg: "../../../assets/battleLokoCaquinia.jpg",
    title: "Loko vs Caquiña",
    date: "18 abr 2023, 19:15pm",
    place: "centro civico",
  },
  {
    routeVideoEmbeb: "https://www.youtube.com/embed/Dv4wgwgfxPU",
    routeImg: "../../../assets/battleLokoCaquinia.jpg",
    title: "Loko vs Caquiña",
    date: "18 abr 2023, 19:15pm",
    place: "centro civico",
  },
  {
    routeVideoEmbeb: "https://www.youtube.com/embed/Dv4wgwgfxPU",
    routeImg: "../../../assets/battleLokoCaquinia.jpg",
    title: "Loko vs Caquiña",
    date: "18 abr 2023, 19:15pm",
    place: "centro civico",
  },
];

function VideosReproductor() {
  const [selectVideo, setSelectVideo] = useState<number | null>(null);
  const [selectVideoURL, setSelectVideoURL] = useState<string>(
    listVideos[0].routeVideoEmbeb
  );
  const handleVideoClick = (index: number) => {
    setSelectVideo(index);
    setSelectVideoURL(listVideos[index].routeVideoEmbeb);
  };

  return (
    <section className="bg-[#1A1618] w-[95%] mt-[3rem] mx-[2.5rem] p-[2rem] flex flex-row justify-center items-center gap-[2rem]">
      <iframe
        className="w-full h-[40rem]"
        src={selectVideoURL}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div className="flex flex-col gap-[1rem] w-[55%] h-[40rem] overflow-y-auto">
        {listVideos.map((video, index) => (
          <VideoFrame
            onClick={() => handleVideoClick(index)}
            key={index}
            routeImg={video.routeImg}
            title={video.title}
            date={video.date}
            place={video.place}
            isSelected={selectVideo === index}
          />
        ))}
      </div>
    </section>
  );
}

export default VideosReproductor;
