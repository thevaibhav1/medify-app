import { useContext, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Context } from "../../store/Context";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const {
    selectedState,
    setSelectedState,
    selectedCity,
    setSelectedCity,
    states,
    cities,
    fetchHospitals,
  } = useContext(Context);

  const [showStateDropdown, setShowStateDropdown] = useState(false);
  const [showCityDropdown, setShowCityDropdown] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchHospitals();
    navigate("/Medical");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 justify-evenly items-center p-5 mt-5"
    >
      <div id="state" className="relative w-full sm:w-64 text-[16px]">
        <div
          onClick={() => {
            setShowStateDropdown((prev) => !prev);
            setShowCityDropdown(false);
          }}
          className="border px-4 py-2 rounded cursor-pointer bg-white flex items-center justify-between"
        >
          <span>{selectedState || "Select State"}</span>
          <IoIosSearch className="text-gray-400" />
        </div>
        {showStateDropdown && (
          <ul className="absolute z-10 bg-white border rounded w-full max-h-40 overflow-y-auto mt-1 shadow">
            {states.map((state) => (
              <li
                key={state}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                onClick={() => {
                  setSelectedState(state);
                  setSelectedCity("");
                  setShowStateDropdown(false);
                }}
              >
                {state}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Custom City Dropdown */}
      <div id="city" className="relative w-full sm:w-64 text-[16px]">
        <div
          onClick={() => {
            if (selectedState) {
              setShowCityDropdown((prev) => !prev);
              setShowStateDropdown(false);
            }
          }}
          className={`border px-4 py-2 rounded cursor-pointer bg-white flex items-center justify-between ${
            !selectedState ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <span>{selectedCity || "Select City"}</span>
          <IoIosSearch className="text-gray-400" />
        </div>
        {showCityDropdown && selectedState && (
          <ul className="absolute z-10 bg-white border rounded w-full max-h-40 overflow-y-auto mt-1 shadow">
            {cities.map((city) => (
              <li
                key={city}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                onClick={() => {
                  setSelectedCity(city);
                  setShowCityDropdown(false);
                }}
              >
                {city}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Submit Button */}
      <button
        id="searchBtn"
        type="submit"
        className="bg-blue-500 text-white rounded-md hover:bg-blue-600 transition font-poppins py-2 w-[15%] text-[16px] min-w-20"
      >
        Submit
      </button>
    </form>
  );
};

export default SearchForm;
