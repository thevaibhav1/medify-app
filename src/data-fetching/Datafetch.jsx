import { useState, useEffect } from "react";

// Get all states
export const useStates = () => {
  const [states, setStates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://meddata-backend.onrender.com/states");
      const data = await res.json();
      setStates(data);
    };
    fetchData();
  }, []);

  return states;
};

export const useCities = (state) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (!state) return;

    const fetchData = async () => {
      const res = await fetch(
        `https://meddata-backend.onrender.com/cities/${state}`
      );
      const data = await res.json();
      setCities(data);
    };
    fetchData();
  }, [state]);

  return cities;
};

export const useHospitals = (state, city) => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    if (!state || !city) return;

    const fetchData = async () => {
      const res = await fetch(
        `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
      );
      const data = await res.json();
      setHospitals(data);
    };
    fetchData();
  }, [state, city]);

  return hospitals;
};
