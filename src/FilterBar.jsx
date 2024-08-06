/* eslint-disable react/prop-types */
export default function FilterBar({ filters, onFilterChange, onClickFilter }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="grid items-center justify-center bg-green-500 p-10">
      <form onSubmit={handleSubmit}>
        <ul className="grid md:grid-cols-9 grid-cols-3 rounded-2xl p-6 gap-6 bg-white justify-center border-4 border-black font-violetsans">
          {Object.keys(filters).map((filter) => (
            <li
              className="flex justify-center items-center gap-1 text-xl "
              key={filter}
            >
              <label htmlFor={filter}>{filter}</label>
              <input
                type="checkbox"
                name={filter}
                checked={filters[filter]}
                onChange={onFilterChange}
              />
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <button
            onClick={onClickFilter}
            type="submit"
            className="bg-yellow-400 font-inherit font-extrabold text-xl border-4 border-black rounded-2xl cursor-pointer h-20 w-36 mt-4 shadow-custom-md hover:shadow-custom-lg active:shadow-custom-sm active:translate-x-0.05 active:translate-y-0.05 hover:-translate-x-0.05 hover:-translate-y-0.05"
          >
            Valider
          </button>
        </div>
      </form>
    </div>
  );
}
