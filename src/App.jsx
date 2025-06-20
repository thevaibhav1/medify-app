import TopSection from "./Components/TopSection/TopSection";
import NavBar from "./Components/NavBar/NavBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import DiscountCard from "./Components/DiscountCard/DiscountCard";
import SpecialisationCard from "./Components/SpecialisationCard/SpecialisationCard";
import Specialist from "./Components/Specialist/Specialist";
import Patient from "./Components/Patient/Patient";
import Blog from "./Components/Blog/Blog";
import Review from "./Components/Review/Review";
import FAQSection from "./Components/FAQsection/FAQsection";

function App() {
  return (
    <>
      <TopSection />
      <NavBar />
      <HeroSection />
      <DiscountCard />
      <SpecialisationCard />
      <Specialist />
      <Patient />
      <Blog />
      <Review />
      <FAQSection />
    </>
  );
}

export default App;
