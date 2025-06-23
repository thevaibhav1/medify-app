import TopSection from "../TopSection/TopSection";
import NavBar from "../NavBar/NavBar";
import HeroSection from "../HeroSection/HeroSection";
import DiscountCard from "../DiscountCard/DiscountCard";
import SpecialisationCard from "../SpecialisationCard/SpecialisationCard";
import Specialist from "../Specialist/Specialist";
import Patient from "../Patient/Patient";
import Blog from "../Blog/Blog";
import Review from "../Review/Review";
import FAQSection from "../FAQsection/FAQsection";
import DownloadForm from "../DownloadForm/DownloadForm";
import About from "../About/About";
const HomePageRoute = () => {
  return (
    <>
      <TopSection />
      <NavBar check={true} />
      <HeroSection />
      <DiscountCard />
      <SpecialisationCard />
      <Specialist />
      <Patient />
      <Blog />
      <Review />
      <FAQSection />
      <DownloadForm />
      <About />
    </>
  );
};
export default HomePageRoute;
