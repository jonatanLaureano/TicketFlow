import { Card, CardContent } from "@/presentation/components/ui/card";

interface EventCardProps {
  title: string;
  description: string;
  imageUrl: string;
}



export default function Card2({
  title = "Freestyle Master Series",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  imageUrl = "/placeholder.svg?height=200&width=400",
}: EventCardProps) {

  return (
      <Card className="max-w-md overflow-hidden bg-white shadow-lg  w-72">
        <div className="relative h-40 w-full bg-black">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={imageUrl}
            alt={title}
          />
        </div>
        <CardContent className="p-4">
          <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </CardContent>
      </Card>
  );
}
