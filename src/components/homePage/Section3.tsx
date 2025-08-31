import Button from "../Button";

const Section3 = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center">
      <div className="w-full md:w-5/10 py-2 md:p-10 p-1 sm:pl-10 flex justify-center items-center">
        <div className="text-content">
          <div className="text-md sm:text-xl text-secondary">What We Do</div>

          <div className="font-bold text-2xl  sm:text-3xl lg:text-4xl">
            The Problem We're Solving
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
      <div className="w-full md:w-5/10 py-2 md:p-10 p-1 sm:pl-10 flex justify-center items-center">
        <div>
          <div className="text-md text-4xl lg:text-8xl sm:text-6xl text-secondary font-medium">{`<500 km`}</div>

          <div className="font-bold text-2xl  sm:text-3xl lg:text-4xl">
            Travel Should Be Fast!
          </div>
          <div className="mt-2">
            At Twynz Aerospace Ltd., we blend engineering excellence,
            sustainable technology, and startup agility to create meaningful
            transportation solutions for a better-connected future.
            Headquartered in London, UK, we focus on solving short-distance
            travel inefficiencies while building a platform for advanced
            engineering consultancy.
          </div>
          <div className="my-6">
            <Button label="ENQUIRE NOW" onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
