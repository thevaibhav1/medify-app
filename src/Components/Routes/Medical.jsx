import MedicalCenter from "../MedicalCenters/MedicalCenter";
import NavBar from "../NavBar/NavBar";
import TopSection from "../TopSection/TopSection";
import FAQSection from "../FAQsection/FAQsection";
import DownloadForm from "../DownloadForm/DownloadForm";
import About from "../About/About";
const Medical = () => {
  return (
    <>
      <MedicalCenter />
      <FAQSection />
      <DownloadForm />
      <About />
    </>
  );
};
export default Medical;
