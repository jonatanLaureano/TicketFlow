import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/presentation/components/ui/select";

export const SelectPlace = ({place = "place"}) => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={place}/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* <SelectLabel>Lugar</SelectLabel> */}
          <SelectItem value="place 1">place 1</SelectItem>
          <SelectItem value="place 2">place 2</SelectItem>
          <SelectItem value="place 3">place 3</SelectItem>
          <SelectItem value="place 4">place 4</SelectItem>
          <SelectItem value="place 5">place 5</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
