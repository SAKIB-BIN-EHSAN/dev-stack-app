const MyStack = ({ selectedStack }) => {
  return (
    <>
      <div className="stack-sidebar">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-900">Your Stack</h3>
            <p id="stack-count" className="text-sm text-gray-500 mt-0.5">
                "No technologies selected yet."
            </p>
        </div>
        {selectedStack.map((stack) => (
          <div
            key={stack.id}
            className="stack-item"
          >
            <img
              src={stack.icon}
              alt={stack.name}
              className="w-8 h-8 object-contain shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">
                {stack.name}
              </p>
              <p className="text-xs text-gray-400">{stack.category}</p>
            </div>
            <button className="shrink-0 text-gray-400 hover:text-gray-700 transition-colors p-1 rounded cursor-pointer">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyStack;