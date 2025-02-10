import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select';
export const SelectValues = () => {
  return (
    <Select>
      <SelectTrigger className="border-2 border-gray-300 hover:bg-gray-300 w-40 rounded-sm">
        <SelectValue placeholder="Valoración" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="fiveStars">⭐⭐⭐⭐⭐</SelectItem>
          <SelectItem value="fourStars">⭐⭐⭐⭐</SelectItem>
          <SelectItem value="threeStars">⭐⭐⭐</SelectItem>
          <SelectItem value="twoStars">⭐⭐</SelectItem>
          <SelectItem value="oneStar">⭐</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
