import StackCard from "../StackCard/StackCard";

const AvailableStacks = ({ availableStack }) => {
  return (
    <>
      {availableStack.map((stack) => (
        <div
          key={stack.id}
          className="stack-card-wrapper"
        >
          <StackCard 
            stack={stack} 
          />
        </div>
      ))}
    </>
  );
};

export default AvailableStacks;
