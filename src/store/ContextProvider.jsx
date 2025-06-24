import { useState } from "react";
import { Context } from "./Context";
import App from "../App";
import { useStates, useCities, useHospitals } from "../data-fetching/Datafetch";
const ContextProvider = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("City");

  const states = useStates();
  const cities = useCities(selectedState);
  const hospitals = useHospitals(selectedState, selectedCity);

  return (
    <Context.Provider
      value={{
        selectedState,
        setSelectedState,
        selectedCity,
        setSelectedCity,
        states,
        cities,
        hospitals,
      }}
    >
      <App />
    </Context.Provider>
  );
};

export default ContextProvider;
