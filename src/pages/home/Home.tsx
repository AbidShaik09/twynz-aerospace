import Section4 from "@/components/homePage/Section4";
import Footer from "../../components/Footer";
import Section1 from "../../components/homePage/Section1";
import Section2 from "../../components/homePage/Section2";
import Section3 from "../../components/homePage/Section3";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
};

export default Home;
