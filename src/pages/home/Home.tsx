import Footer from "../../components/Footer";
import Section1 from "../../components/Section1";
import Section2 from "../../components/Section2";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
};

export default Home;
