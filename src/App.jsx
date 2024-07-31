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
    rose: false,
    yellow: false,
    red: false,
    purple: false,
    bug: false,
    lizard: false,
  });

  useEffect(() => {
    setFlowersData(flowers);
    setFilteredFlowers(flowers);
  }, []);

  //   useEffect(() => {
  //     filterFlowers();
  //   }, [filters]);

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilters({
      ...filters,
      [name]: checked,
    });
  };

  //   const filterFlowers = () => {
  //     flowers.filter((flower) => {
  //       if (flower.color === "white") {
  //         console.info("filter", flower);
  //         setFlowersData(flower);
  //       }
  //     });
  //   };

  console.info("fff", flowersData);

  return (
    <>
      <FilterBar filters={filters} onFilterChange={handleFilterChange} />
      <div className="grid grid-cols-5 gap-4 p-5 bg-green-400">
        {flowersData.map((flower) => (
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
