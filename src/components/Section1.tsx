import Button from "./Button";

const Section1 = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row items-center">
        <div className="w-full md:w-4/10 py-2 md:p-10 pl-10 flex justify-center items-center">
          <div className="text-content">
            <div className="text-xl text-secondary">
              Sustainable. Scalable. Transformative.
            </div>

            <div className="font-bold text-4xl ">
              Engineering the Future of Flight
            </div>

            <div className="mt-2">
              At Twynz Aerospace Ltd., we blend engineering excellence,
              sustainable technology, and startup agility to create meaningful
              transportation solutions for a better-connected future.
              Headquartered in London, UK, we focus on solving short-distance
              travel inefficiencies while building a platform for advanced
              engineering consultancy.
            </div>
            <div className="flex gap-6 my-6 flex-col lg:flex-row md:flex-col sm:flex-row ">
              <Button
                label="EXPLORE OUR EVTOL VISION"
                onClick={() => {}}
                type="secondary"
              />
              <Button label="REQUEST ENGINEERING SERVICES" onClick={() => {}} />
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/10">
          <img
            src="/images/airplane.png"
            alt="Airplane"
            className="w-full h-auto"
          />
        </div>
      </div>
    </>
  );
};

export default Section1;
