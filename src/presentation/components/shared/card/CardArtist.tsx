import { Button } from "../../ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "../../ui/card"
import { Artist, Rrss } from "../fakeapis/apiIntefaces"
import { rrss } from "../fakeapis/bd"

export const CardArtist = ({ name, alias, url, description }: Artist) => {
  return (
    <Card className="border-0 bg-white shadow-none mt-20 drop-shadow-none">
      <CardHeader className="p-0 flex-grow">
        <div className="bg-[#4B4D5E] h-56 rounded-t-sm flex justify-center relative">
          <img
            src={url}
            alt="imgArtist"
            className="h-72 object-cover overflow-x-hidden gap-10 absolute bottom-0 z-10"
          />
          <div className="flex justify-center gap-10 absolute bottom-0 z-20">
            {rrss.map(({ id, svg }: Rrss) => (
              <button key={id} className="bg-yellow-500 p-3 rounded-full">
                <img src={svg} alt="icon" className="size-9" />
              </button>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent className="grid grid-cols-1 text-center text-pretty flex-grow">
        <strong className="text-2xl m-4">
          {name} ({alias})
        </strong>
        <p className="text-base font-semibold">{description}</p>
      </CardContent>

      <CardFooter className="grid grid-cols-1 flex-grow">
        <div className="grid grid-cols-2 gap-7">
          <Button className="items-center gap-1 border-[2.4px] border-yellow-500 hover:bg-yellow-500 text-base text-yellow-500 bg-transparent hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
            <span>Editar</span>
          </Button>
          <Button className="items-center gap-1 border-[2.4px] border-red-700 hover:bg-red-700 text-base text-red-700 bg-transparent hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
            <span>Eliminar</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
