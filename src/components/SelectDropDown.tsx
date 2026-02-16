import Dropdown from "react-bootstrap/Dropdown";
import { CUISINES } from "../constants/cuisines";

type DropDownProps = {
  cuisine: string;
  setCuisine: (cuisine: string) => void;
};
const SelectDropDown = ({ cuisine, setCuisine }: DropDownProps) => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle
          variant="outline-secondary"
          id="dropdown-cuisine"
          className="border-gray-300 bg-white text-gray-800 hover:bg-gray-200"
        >
          {cuisine || "All cuisines"}
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ maxHeight: "200px", overflowY: "auto" }}>
          <Dropdown.Item onClick={() => setCuisine("")}>
            All cuisines
          </Dropdown.Item>
          {CUISINES.map((cuisineOption) => (
            <Dropdown.Item
              key={cuisineOption}
              onClick={() => setCuisine(cuisineOption)}
              active={cuisine === cuisineOption}
            >
              {cuisineOption}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default SelectDropDown;
