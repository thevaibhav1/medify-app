import { useState } from "react";
import { Context } from "./Context";
import App from "../App";
import { useStates, useCities } from "../data-fetching/Datafetch";

const ContextProvider = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [hospitals, setHospitals] = useState([]);

  const states = useStates();
  const cities = useCities(selectedState);

  const fetchHospitals = async () => {
    if (!selectedState || !selectedCity) return;

    const res = await fetch(
      `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`
    );
    const data = await res.json();
    setHospitals(data);
  };

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
        fetchHospitals,
      }}
    >
      <App />
    </Context.Provider>
  );
};

export default ContextProvider;
