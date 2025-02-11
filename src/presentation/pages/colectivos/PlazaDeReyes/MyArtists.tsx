import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import TargetItemArtist from "./TargetItemArtist";

interface Artist {
  name: string;
  nickname: string;
  about: string;
  profileImg: string;
  media: {
    facebook: string;
    instagram: string;
    youtube: string;
  };
}

const artists: Artist[] = [
  {
    name: "Valentín Olivda",
    nickname: "Wos",
    about:
      "Conocido artísticamente como Wos, es un Freestyleer, Rapero, cantante, musico, y...",
    profileImg: "wos.png",
    media: {
      facebook: "wos.facebook",
      instagram: "wos.instagram",
      youtube: "wos.youtube",
    },
  },
  {
    name: "Valentín Olivda",
    nickname: "Wos",
    about:
      "Conocido artísticamente como Wos, es un Freestyleer, Rapero, cantante, musico, y...",
    profileImg: "wos.png",
    media: {
      facebook: "wos.facebook",
      instagram: "wos.instagram",
      youtube: "wos.youtube",
    },
  },
  {
    name: "Valentín Olivda",
    nickname: "Wos",
    about:
      "Conocido artísticamente como Wos, es un Freestyleer, Rapero, cantante, musico, y...",
    profileImg: "wos.png",
    media: {
      facebook: "wos.facebook",
      instagram: "wos.instagram",
      youtube: "wos.youtube",
    },
  },
  {
    name: "Valentín Olivda",
    nickname: "Wos",
    about:
      "Conocido artísticamente como Wos, es un Freestyleer, Rapero, cantante, musico, y...",
    profileImg: "wos.png",
    media: {
      facebook: "wos.facebook",
      instagram: "wos.instagram",
      youtube: "wos.youtube",
    },
  },
];

function MyArtists() {
  return (
    <section className="w-[95%] mt-[3rem] p-[2rem] mx-[2.5rem]">
      <h3 className="font-bold text-[2.5em] mb-[4rem]">MIS ARTISTAS</h3>

      <div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {artists.map((artist, index) => (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex flex-row gap-[1rem]">
                <TargetItemArtist
                  key={index}
                  name={artist.name}
                  nickname={artist.nickname}
                  about={artist.about}
                  profileImg={artist.profileImg}
                  media={artist.media}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselNext />
          <CarouselPrevious /> */}
        </Carousel>
      </div>
    </section>
  );
}

export default MyArtists;
