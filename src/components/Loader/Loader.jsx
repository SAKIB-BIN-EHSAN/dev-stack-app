import "./Loader.css";

const Loader = () => {
    return (
        <>
            <div id="loading-overlay">
                <div className="spinner"></div>
                <p className="text-gray-500 font-medium text-sm">Loading technologies…</p>
            </div>
        </>
    );
}

export default Loader;