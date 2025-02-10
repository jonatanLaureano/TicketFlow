import { CardArtist } from "../../shared/card/CardArtist"
import { artists } from "../../shared/fakeapis/bd"

export const SectionMyArtists = () => {
  return (
    <section className="mb-10 -mt-10">
      <div className="mx-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5 max-w-[100%]">
        {artists.map((artist) => (
          <CardArtist key={artist.id} {...artist} />
        ))}
      </div>
    </section>
  )
}