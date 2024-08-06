import { useEffect, useState } from "react";
import FilterBar from "./FilterBar";
import flowers from "./flowers.json";

export default function App() {
  const [flowersData, setFlowersData] = useState([]);
  const [filteredFlowers, setFilteredFlowers] = useState([]);
  const [filters, setFilters] = useState({
    black: false,
    white: false,
    brown: false,
    green: false,
    pink: false,
    yellow: false,
    red: false,
    purple: false,
    bug: false,
  });

  useEffect(() => {
    setFlowersData(flowers);
    setFilteredFlowers(flowers);
  }, []);

  const handleClickFilter = () => {
    const result = flowersData.filter((flower) => {
      return filters[flower.color];
    });
    console.info(flowersData);
    console.info("Filtered data -->", result);
    setFilteredFlowers(result);
  };

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilters({
      ...filters,
      [name]: checked,
    });
  };

  return (
    <>
      <FilterBar
        filters={filters}
        onFilterChange={handleFilterChange}
        onClickFilter={handleClickFilter}
      />
      <div className="grid grid-cols-5 gap-4 p-5 bg-green-400">
        {filteredFlowers.map((flower) => (
          <img
            className="rounded-xl shadow-2xl"
            key={flower.id}
            src={flower.img_url}
          />
        ))}
      </div>
    </>
  );
}
