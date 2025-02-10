import { Button } from "@/components/ui/button";
import { listEvent } from "@/config/const";
import { useState } from "react";
import { TypographyH2 } from "@/presentation/components/shared/typography";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/presentation/components/ui/card";

function EventList() {
  const [visible, setVisible] = useState(1);
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    if (!expanded) {
      setExpanded(true);
      setVisible((prev) => Math.min(prev + 3, listEvent.length));
    } else {
      setExpanded(false);
      setVisible(1);
    }
  };
  return (
    <div className="bg-[#1C1C1E] w-[95%] mx-auto my-5 p-10">
      <TypographyH2 className="text-white text-xl font-bold mb-5">
        Lista de Eventos
      </TypographyH2>
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          expanded ? "max-h-[1000px]" : "max-h-[500px]"
        }`}
      >
        {listEvent.slice(0, visible).map((e) => (
          <Card className="flex bg-[#2A2A2D] text-white rounded-lg overflow-hidden my-5">
            <img
              src={e.imageLink}
              alt={e.title}
              className="w-36 object-cover mx-4 my-2 border-2 border-yellow-500"
            />
            <div className="flex flex-col w-full p-5 mx-5 ">
              <CardTitle className="text-lg font-nunito mb-5">
                {e.title}
              </CardTitle>
              <CardContent className="text-lg text-gray-400 p-0 font-nunito ">
                {e.description}
              </CardContent>
            </div>
            <CardFooter className="flex shrink-0 mt-4 space-x-24">
              <span className="text-xl font-bold">{e.date}</span>
              <Button className="bg-[#5D2994] text-white px-8 py-2 rounded-md hover:bg-[#624393] transition duration-500">
                Comprar
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          onClick={handleClick}
          className="bg-[#5D2994] text-white py-5 w-[20%] rounded-md text-lg hover:bg-[#624393] transition duration-500"
        >
          {!expanded ? "Cargar más eventos" : "Mostrar menos"}
        </Button>
      </div>
    </div>
  );
}

export default EventList;
