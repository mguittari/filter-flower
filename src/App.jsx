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
      const bugMatch = filters.bug && flower.bug;
      const colorMatch = filters[flower.color];
      return colorMatch || bugMatch;
    });
    console.info(flowersData);
    console.info("Filtered data -->", result);
    setFilteredFlowers(result);
    if (result.length === 0) {
      setFilteredFlowers(flowers);
    }
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
      <div className="grid md:grid-cols-5 gap-4 px-5 pb-28 bg-green-500 justify-center">
        {filteredFlowers.map((flower) => (
          <img className="rounded-xl" key={flower.id} src={flower.img_url} />
        ))}
      </div>
    </>
  );
}
