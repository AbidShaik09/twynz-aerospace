import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const Section2 = () => {
  const navigate = useNavigate();
  return (
    <div className="mb-5">
      <div className="ml-10">
        <div className="text-md sm:text-xl text-secondary">What We Do</div>
        <div className="font-bold text-2xl  sm:text-3xl lg:text-4xl">
          Let's Touch Base!
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center">
        <div className="w-full md:w-5/10 py-2 md:p-10 p-1 sm:pl-10 flex justify-center items-center">
          <div className="text-content">
            <img src="/images/ai-icon-01.png" alt="AI Icon" />
            <h3 className="h3-accent mt-3">eVTOL Development</h3>
            <p className="mt-2">
              Building a new standard for regional mobility through sustainable
              aerospace innovation.
            </p>
            <div className="flex gap-6 my-6 flex-col lg:flex-row md:flex-col sm:flex-row ">
              <Button title="MORE ON OUR AIRCRAFT" onClick={() => {}}>
                <span className="text-xs">MORE ON OUR AIRCRAFT</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-5/10 py-2 md:p-10 p-1 sm:pl-10 flex justify-center items-center">
          <div className="text-content">
            <img src="/images/ai-icon-02.png" alt="AI Icon" />
            <h3 className="h3-accent mt-3">
              Mechanical Engineering Design (MED)
            </h3>
            <p className="mt-2">
              Advanced design, simulation, and documentation services for
              aerospace, automotive, and manufacturing industries.
            </p>
            <div className="flex gap-6 my-6 flex-col lg:flex-row md:flex-col sm:flex-row ">
              <Button
                title="EXPLORE MED SERVICES"
                onClick={() => {
                  navigate("/services-med");
                }}
              >
                <span className="text-xs">EXPLORE MED SERVICES</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
