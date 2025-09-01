import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
          <div className="flex gap-6 my-6 flex-col lg:flex-row md:flex-col sm:flex-row h-60">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Congested Roads</AccordionTrigger>
                <AccordionContent>
                  Even with cleaner cars, average commute times remain
                  unchanged.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Slow Trains</AccordionTrigger>
                <AccordionContent>
                  Regional trains are often slow, delayed, or under-capacity.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Inefficient Aviation</AccordionTrigger>
                <AccordionContent>
                  {`Jet-fueled aircraft aren’t viable for <500 km routes due to cost, emissions, and airport constraints.`}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Fragmented Connectivity</AccordionTrigger>
                <AccordionContent>
                  {`Commuting between airports or cities like Amsterdam–Brussels–Luxembourg is a logistical challenge.`}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
          </div>
          <div className="my-6">
            <Button title="ENQUIRE NOW" onClick={() => {}}>
              <span className="text-xs">ENQUIRE NOW</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
