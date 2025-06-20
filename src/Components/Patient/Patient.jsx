import patient1 from "../../assets/Patient/patient1.png";
import patient2 from "../../assets/Patient/patient2.png";

const Patient = () => {
  return (
    <div className="bg-[linear-gradient(81deg,_#E7F0FF_9.01%,_rgba(232,241,255,0.47)_89.11%)] flex justify-center gap-10 mr-5 px-4 py-10">
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8">
        {/* Left Images Section */}
        <div className="flex flex-col w-full md:w-1/2 gap-4 md:relative h-auto md:h-96 mr-24">
          <div className="flex justify-end">
            <img src={patient1} alt="patient1" className="w-full md:w-[50%]" />
          </div>

          {/* Responsive Positioning for patient2 */}
          <div className="w-full md:absolute md:w-[70%] md:top-[46%] lg:top-[66%] md:left-[50%] md:transform md:-translate-x-1/2 md:-translate-y-1/2 flex justify-center">
            <img
              src={patient2}
              alt="patient2"
              className="w-[60%] md:w-[66%] object-contain"
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="w-full md:w-1/2 flex flex-col    text-center md:text-left">
          <p className="text-sm text-[#2AA7FF] font-semibold uppercase tracking-wide">
            Helping Patients from Around the Globe!!
          </p>
          <h2 className="text-6xl  text-[#2AA7FF] font-bold my-2">
            <span className="text-[#1B3C74]">Patient</span> Caring
          </h2>
          <p className="text-[#77829D]">
            Our goal is to deliver quality of care in a courteous, respectful,
            and compassionate manner. We hope you will allow us to care for you
            and strive to be the first and best choice for healthcare.
          </p>
          <br />
          <br />
          <p className="font-roboto text-[#1B3C74] font-medium text-[18px] leading-[27px] align-middle tracking-[0]">
            Stay Updated About Your Health
          </p>
          <p className="font-roboto text-[#1B3C74] font-medium text-[18px] leading-[27px] align-middle tracking-[0]">
            Check Your Results Online
          </p>
          <p className="font-roboto text-[#1B3C74]  font-medium text-[18px] leading-[27px] align-middle tracking-[0]">
            Manage Your Appointments
          </p>
        </div>
      </div>
    </div>
  );
};

export default Patient;
