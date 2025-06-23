import { useState } from "react";
import { Context } from "./Context";
import App from "../App";

const ContextProvider = () => {
  const [statedata, setStateData] = useState([]);
  const [citydata, setCityData] = useState([]);

  const handleState = (sdata) => {
    setStateData(sdata);
  };

  const handleCity = (cdata) => {
    setCityData(cdata);
  };

  return (
    <Context.Provider
      value={{
        statedata,
        citydata,
        handleState,
        handleCity,
      }}
    >
      <App />
    </Context.Provider>
  );
};

export default ContextProvider;
