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
      if (!Array.isArray(parsed)) return;
      const normalized = parsed.map((item) => {
        if (Array.isArray(item.hospital)) return item;
        return {
          time: item.bookingTime || item.time,
          date: item.bookingDate || item.date,
          id: item["Provider ID"] || Math.random().toString(36).slice(2), // fallback id
          hospital: [item],
        };
      });
      setAppointment(normalized);
    } catch (error) {
      console.error(
        "Failed to parse or normalize bookings from localStorage:",
        error
      );
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
