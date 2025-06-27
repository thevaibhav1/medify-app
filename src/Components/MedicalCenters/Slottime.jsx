import { useContext, useState } from "react";
import { Context } from "../../store/Context";

const Slottime = ({ selectDate }) => {
  const morning = ["11:30AM"];
  const afternoon = ["12:00PM", "12:30PM", "1:30PM", "2:00PM", "2:30PM"];
  const evening = ["6:00PM", "6:30PM", "7:00PM", "7:30PM"];
  const { handleSlot } = useContext(Context);
  const handleSlots = (ele) => {
    const appointobj = {
      slot: ele,
      date: selectDate.date,
      id: selectDate.id,
    };
    handleSlot(appointobj);
  };
  return (
    <div className="flex flex-col gap-4 mt-5">
      <div className="flex flex-col sm:flex-row gap-4 px-4 py-3 w-full max-w-[700px] mx-auto border-b">
        <p className="min-w-[80px] font-lato font-normal text-[14px] leading-[19.6px] tracking-normal align-middle capitalize   text-sm">
          Morning
        </p>
        <div className="flex flex-wrap gap-3">
          {morning.map((ele) => {
            return (
              <button
                onClick={() => handleSlots(ele)}
                className="border  font-[lato] font-normal text-[14px] leading-[19.6px] tracking-normal text-center align-middle px-4 py-1 rounded text-sm   border-[#2AA7FF] text-[#2AA7FF]"
              >
                {ele}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 px-4 py-3 w-full max-w-[700px] mx-auto border-b">
        <p className="min-w-[80px] font-lato font-normal text-[14px] leading-[19.6px] tracking-normal align-middle capitalize   text-sm">
          Afternoon
        </p>
        <div className="flex flex-wrap gap-3">
          {afternoon.map((ele) => {
            return (
              <button
                onClick={() => handleSlots(ele)}
                className="border  font-[lato] font-normal text-[14px] leading-[19.6px] tracking-normal text-center align-middle px-4 py-1 rounded text-sm   border-[#2AA7FF] text-[#2AA7FF]"
              >
                {ele}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 px-4 py-3 w-full max-w-[700px] mx-auto border-b">
        <p className="min-w-[80px] font-lato font-normal text-[14px] leading-[19.6px] tracking-normal align-middle capitalize   text-sm">
          Evening
        </p>
        <div className="flex flex-wrap gap-3">
          {evening.map((ele) => {
            return (
              <button
                onClick={() => handleSlots(ele)}
                className="border  font-[lato] font-normal text-[14px] leading-[19.6px] tracking-normal text-center align-middle px-4 py-1 rounded text-sm   border-[#2AA7FF] text-[#2AA7FF]"
              >
                {ele}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Slottime;
