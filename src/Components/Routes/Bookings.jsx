import TopSection from "../TopSection/TopSection";
import NavBar from "../NavBar/NavBar";
import Search from "../Search/Search";
import MedicalCards from "../MedicalCenters/MedicalCards";
import DownloadForm from "../DownloadForm/DownloadForm";
import About from "../About/About";
const Bookings = () => {
  return (
    <>
      <TopSection />
      <NavBar check={false} />
      <Search />
      <MedicalCards check={false} />
      <DownloadForm />
      <About />
    </>
  );
};
export default Bookings;
