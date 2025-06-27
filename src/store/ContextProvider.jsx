import { useState, useEffect } from "react";
import { Context } from "./Context";
import App from "../App";
import { useStates, useCities } from "../data-fetching/Datafetch";

const ContextProvider = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [checkcomp, setCheck] = useState(false);
  const [slot, setSlot] = useState({});
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
    setSlot({ slot, date, id });
  };

  useEffect(() => {
    if (slot.slot === undefined) return;

    const matchedHospitals = hospitals.filter(
      (hos) => hos["Provider ID"] === slot.id
    );

    if (matchedHospitals.length === 0) return;

    setAppointment((prev) => [
      {
        time: slot.slot,
        date: slot.date,
        id: slot.id,
        hospital: matchedHospitals,
      },
      ...prev,
    ]);
  }, [slot]);

  useEffect(() => {
    if (appointment.length > 0) {
      localStorage.setItem("bookings", JSON.stringify(appointment));
    }
  }, [appointment]);

  useEffect(() => {
    const data = localStorage.getItem("bookings");
    try {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) {
        const validData = parsed.filter((item) => Array.isArray(item.hospital));
        setAppointment(validData);
      } else {
        setAppointment([]);
      }
    } catch (error) {
      console.error("Failed ", error);
      setAppointment([]);
    }
  }, []);

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
