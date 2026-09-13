import "./StackCard.css";
import { Bounce, toast } from 'react-toastify';
const StackCard = ({stack, isStackSelected, handleSelectedStack}) => {

    const handleClickedStack = (stackId, stackName) => {
        toast.success(`${stackName} is added to your stack successfully`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        handleSelectedStack(stackId);
    }
    return (
        <>
            <div className="tech-card">
                <div className="flex items-start justify-between">
                    <img
                        src={stack.icon}
                        alt={stack.name}
                        className="w-10 h-10 object-contain"
                    />
                    <span className={`badge-chip badge-${stack.badge.toLowerCase()}`}>{stack.badge}</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 leading-tight">
                    {stack.name}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed flex-1">
                    {stack.description}
                </p>
                <div className="flex flex-wrap items-center gap-1">
                    <span className="cat-chip">{stack.category}</span>
                    <span className="difficulty-chip">{stack.difficulty}</span>
                    <span className="flex items-center gap-1 ml-auto">
                    <span className="text-amber-400 text-xs">★</span>
                    <span className="text-xs font-semibold text-gray-700">
                        {stack.rating}
                    </span>
                    </span>
                </div>
                <button onClick={() => handleClickedStack(stack.id, stack.name)} className="btn-add" disabled={isStackSelected}>
                    {isStackSelected ? "✓ Added to Stack" : "Add to Stack"}
                </button>
            </div>
        </>
    );
}

export default StackCard;