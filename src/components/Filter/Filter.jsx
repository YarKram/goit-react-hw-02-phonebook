import { Label } from './Filter.styled';

const Filter = ({ changeFilterValue }) => {
  return (
    <Label>
      Find contacts by name
      <input onChange={changeFilterValue}></input>
    </Label>
  );
};

export default Filter;
