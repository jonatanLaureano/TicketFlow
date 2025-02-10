// import {
//   SelectCalendar,
//   SelectPlace,
//   SelectPrice,
// } from '@/presentation/components/shared/selects';
import { Input } from '../../ui/input';
import { CiSearch } from 'react-icons/ci';
import { Button } from '../../ui/button';
import { useState } from 'react';
import { ModalFilters } from '../../modal';

export const SelectColectivos = () => {
  const [ascendet, setAscendet] = useState(true);

  return (
    <section className="flex justify-end space-x-4 items-center pt-10 mx-auto w-full px-6 mb-8">
      <ModalFilters />
      <Button
        className="border-2 px-6 border-gray-300 hover:bg-gray-300 bg-white hover:bg-transparent"
        onClick={() => setAscendet(!ascendet)}
      >
        {ascendet ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
            />
          </svg>
        )}
      </Button>
      {/* <SelectPlace place="Colectivos" /> */}
      <div className="relative bg-white rounded-md w-60">
        <Input
          className="border-purple-200 hover:border-purple-500 border-2 focus:outline-none"
          placeholder="Escribir evento"
        />
        <div className="absolute right-0 top-0 p-2">
          <CiSearch className="text-xl " style={{ strokeWidth: 2 }} />
        </div>
      </div>
      <Button className="border-2 px-6 border-gray-300 hover:bg-gray-300 bg-white hover:bg-transparent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </Button>
    </section>
  );
};
