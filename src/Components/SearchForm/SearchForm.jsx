import { useContext } from "react";
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

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    await fetchHospitals(); // fetch data
    navigate("/Medical"); // redirect to hospital page
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 justify-evenly items-center p-5 mt-5"
    >
      {/* State Select */}
      <div id="state" className="relative w-full sm:w-64 text-[16px]">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <IoIosSearch className="h-5 w-5 text-gray-400" />
        </span>
        <select
          onChange={(e) => setSelectedState(e.target.value)}
          value={selectedState}
          className="pl-10 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">State</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      {/* City Select */}
      <div id="city" className="relative w-full sm:w-64 text-[16px]">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <IoIosSearch className="h-5 w-5 text-gray-400" />
        </span>
        <select
          onChange={(e) => setSelectedCity(e.target.value)}
          value={selectedCity}
          className="pl-10 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">City</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Submit */}
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
