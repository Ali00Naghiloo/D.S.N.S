import { setSelectedPlant } from "../slices/selectedPageMyac";
import { useDispatch, useSelector } from "react-redux";
import api from "../api/demos.json";

const SelectedPlant = () => {
  const dispatch = useDispatch();
  const selectedPlant = useSelector(
    (state) => state.selectedPlant.selectedPlant
  );

  return (
    <>
      <p>the selected power plant is {selectedPlant} </p>
    </>
  );
};

export default SelectedPlant;
