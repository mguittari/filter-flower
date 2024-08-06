/* eslint-disable react/prop-types */
export default function FilterBar({ filters, onFilterChange, onClickFilter }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="grid items-center justify-center bg-green-400 p-10">
      <form onSubmit={handleSubmit}>
        <ul className="grid grid-cols-10 gap-2 border-2 p-4 bg-white">
          {Object.keys(filters).map((filter) => (
            <li key={filter}>
              <label htmlFor={filter}>{filter}</label>
              <input
                type="checkbox"
                name={filter}
                checked={filters[filter]}
                onChange={onFilterChange}
              />
            </li>
          ))}
          <li>
            <button
              onClick={onClickFilter}
              type="submit"
              className="bg-slate-300"
            >
              Valider
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}
