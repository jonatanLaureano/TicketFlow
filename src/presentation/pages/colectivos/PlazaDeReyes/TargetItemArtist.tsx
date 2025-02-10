interface TargetItemArtistProps {
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

function TargetItemArtist({
  name,
  nickname,
  about,
  profileImg,
  media,
}: TargetItemArtistProps) {
  return (
    <div className="flex flex-col justify-center items-center w-[30rem] h-[20rem] bg-[#4b4d5e]">
      <img src={profileImg} alt={nickname} />
      <div>
        <ul className="flex flex-row justify-center items-center gap-[1rem]">
          <li>
            <a href={media.facebook} target="_blank" rel="noopener noreferrer">
              svg
            </a>
          </li>
          <li>
            <a href={media.instagram} target="_blank" rel="noopener noreferrer">
              svg
            </a>
          </li>
          <li>
            <a href={media.youtube} target="_blank" rel="noopener noreferrer">
              svg
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center text-center bg-white">
        <h4 className="font-bold">
          {name} ({nickname})
        </h4>
        <p>{about}</p>
      </div>
    </div>
  );
}

export default TargetItemArtist;
