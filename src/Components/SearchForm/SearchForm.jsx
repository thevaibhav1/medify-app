import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { useStates, useCities } from "../../data-fetching/Datafetch";
import { useState } from "react";
const SearchForm = () => {
  const [selectstate, setSelectState] = useState("");
  const [selectcity, setSelectCity] = useState("");
  const states = useStates();
  const cities = useCities(selectstate);
  const handleState = (e) => {
    setSelectState(e.target.value);
  };

  const handleCity = (e) => {
    setSelectCity(e.target.value);
  };
  return (
    <form className="flex flex-col sm:flex-row gap-4 justify-evenly items-center p-5 mt-5">
      <div className="relative w-full sm:w-64 text-[16px]">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <IoIosSearch className="h-5 w-5 text-gray-400" />
        </span>
        <select
          onChange={handleState}
          value={selectstate}
          id="state"
          className="pl-10 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:font-[poppins]"
        >
          <option value="">State</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      <div className="relative w-full sm:w-64 text-[16px]">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <IoIosSearch className="h-5 w-5 text-gray-400" />
        </span>
        <select
          onChange={handleCity}
          value={selectcity}
          id="city"
          className="pl-10 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:font-[poppins]"
        >
          <option value="">City</option>
          {cities &&
            cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
        </select>
      </div>

      {/* Submit Button */}
      <Link to="/Medical">
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md hover:bg-blue-600 transition  font-poppins py-2 w-[15%] text-[16px] min-w-20"
        >
          Submit
        </button>
      </Link>
    </form>
  );
};
export default SearchForm;
