import React from "react";
import { CiSearch } from "react-icons/ci";
import { ModalDate, ModalLocation } from "../../modal";
import { ModalPrice } from "../../modal/ModalPrice";
import { Input } from "../../ui/input";
import { SelectValues } from "./SelectValues";

interface SelectSearchProps {
  viewLocal: boolean;
  viewValue: boolean;
}

export const SelectSearch: React.FC<SelectSearchProps> = ({
  viewLocal,
  viewValue,
}) => {
  return (
    <section className="flex justify-end gap-4 items-center pt-10 mx-auto w-full">
      {viewValue && (
        <div className="col-span-1">
          <SelectValues />
        </div>
      )}
      <div className="col-span-1">
        <ModalPrice />
      </div>
      <div className="col-span-1">
        <ModalDate />
      </div>
      {viewLocal && (
        <div className="col-span-1">
          <ModalLocation />
        </div>
      )}
      <div className="relative bg-white rounded-md w-60">
        <Input
          className="border-purple-200 hover:border-purple-500 border-2 focus:outline-none"
          placeholder="Escribir evento"
        />
        <div className="absolute right-0 top-0 p-2">
          <CiSearch className="text-xl" style={{ strokeWidth: 2 }} />
        </div>
      </div>
    </section>
  );
};
