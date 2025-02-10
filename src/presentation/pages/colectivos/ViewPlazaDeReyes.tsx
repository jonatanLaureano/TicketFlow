import Coments from "@/presentation/components/coments/Coments";
import BannerReyes from "./PlazaDeReyes/BannerReyes";
import EventList from "./PlazaDeReyes/EventList";
import HistoryReyes from "./PlazaDeReyes/HistoryReyes";
import VideosReproductor from "./PlazaDeReyes/VideosReproduces";
import MyArtists from "./PlazaDeReyes/MyArtists";
export const ViewPlazaDeReyes = () => {
  return (
    <>
      <BannerReyes />
      <HistoryReyes />
      <VideosReproductor />
      <EventList />
      <MyArtists />
      <Coments />
    </>
  );
};
