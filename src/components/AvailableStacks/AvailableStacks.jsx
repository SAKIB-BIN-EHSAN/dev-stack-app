import StackCard from "../StackCard/StackCard";

const AvailableStacks = ({ availableStack, selectedStack, handleSelectedStack }) => {
  return (
    <>
      {availableStack.map((stack) => (
        <div
          key={stack.id}
          className="stack-card-wrapper"
        >
          <StackCard 
            stack={stack}
            handleSelectedStack={handleSelectedStack}
          />
        </div>
      ))}
    </>
  );
};

export default AvailableStacks;
