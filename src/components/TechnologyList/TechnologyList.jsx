import { use, useState } from "react";
import AvailableStacks from "../AvailableStacks/AvailableStacks";
import MyStack from "../MyStack/MyStack";

const TechnologyList = ({ stackListPromise }) => {
  const stackListData = use(stackListPromise);

  const [availableStack] = useState(stackListData);
  const [selectedStack, setSelectedStack] = useState([]);

  const handleSelectedStack = (stackId) => {

    const justSelectedStack = availableStack.find((stack) => {
      return stack.id === stackId;
    });

    setSelectedStack([...selectedStack, justSelectedStack]);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            Explore the{" "}
            <span className="gradient-brand-text">Technologies</span>
          </h2>
          <p className="text-gray-500 text-sm">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div
            id="tech-grid"
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
          >
            {/* Available Stacks Left Sidebar */}
            <AvailableStacks
              availableStack={availableStack}
              selectedStack={selectedStack}
              handleSelectedStack={handleSelectedStack}
            />
          </div>
          {/* <Your Stack Right Sidebar */}
          <div className="w-full lg:w-72 xl:w-80">
            <MyStack
              selectedStack={selectedStack}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnologyList;
