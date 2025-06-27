import { useState, useEffect } from "react";
import { Context } from "./Context";
import App from "../App";
import { useStates, useCities } from "../data-fetching/Datafetch";

const ContextProvider = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [checkcomp, setCheck] = useState(false);
  const [slot, setSlot] = useState("");
  const [appointment, setAppointment] = useState([]);
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

  const handleCheck = () => {
    setCheck(true);
  };

  const handleSlot = ({ slot, date, id }) => {
    setSlot({
      slot,
      date,
      id,
    });
  };

  useEffect(() => {
    if (slot.slot === undefined) return;
    setAppointment((prev) => {
      return [
        {
          time: slot.slot,
          date: slot.date,
          id: slot.id,
          hospital: hospitals.filter((hos) => hos["Provider ID"] === slot.id),
        },
        ...prev,
      ];
    });
  }, [slot]);
  console.log(appointment);
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
        handleCheck,
        checkcomp,
        handleSlot,
        slot,
        appointment,
      }}
    >
      <App />
    </Context.Provider>
  );
};

export default ContextProvider;
