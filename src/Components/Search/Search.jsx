import SearchForm from "../SearchForm/SearchForm";

const SearchHeader = () => {
  return (
    <div className="relative bg-[#2AA8FF] rounded-b-[16px] pb-10 px-4 ">
      {/* Heading */}
      <h1 className="text-white text-2xl font-semibold pt-4 pl-4">
        My Bookings
      </h1>

      {/* Search Form Container */}
      <div className="absolute left-1/2  transform -translate-x-1/2 translate-y-1/2 w-full max-w-2xl px-4">
        <div className="bg-white flex items-center shadow-lg rounded-xl overflow-hidden">
          <input
            type="text"
            placeholder="Search By Hospital"
            className="flex-grow px-4 py-3 text-gray-700 focus:outline-none"
          />
          <button className="bg-[#2AA8FF] text-white px-6 py-3 transition">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
