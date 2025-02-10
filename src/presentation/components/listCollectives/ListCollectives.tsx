import { Button } from "../ui/button"
import { events } from "@/config/const"

export const ListCollectives = () => {
  return (
    <div className='px-6'>
      {events.map(({id, eventName, descriptionEvent, url}) => (
        <div key={id} className='mb-6 p-4'>
          <div className="mb-4 ">
            <title className="text-lg font-bold">{eventName}</title>
            <p className="text-sm ">{descriptionEvent}</p>
            <Button className="mt-2">Ver Más</Button>
          </div>
          <div className='rounded-lg'>
            <img src={url} alt={eventName} />
          </div>
        </div>
      ))}
    </div>
  )
}