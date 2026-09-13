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
            isStackSelected={selectedStack.some((st) => st.id === stack.id)}
            handleSelectedStack={handleSelectedStack}
          />
        </div>
      ))}
    </>
  );
};

export default AvailableStacks;
