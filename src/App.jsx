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
    const isColorFilterActive = Object.keys(filters).some(
      (color) => filters[color]
    );
    const isBugFilterActive = filters.bug;

    if (!isColorFilterActive && !isBugFilterActive) {
      setFilteredFlowers(flowers);
      return;
    }
    const colorFiltered = flowersData.filter((flower) => {
      const colorMatch = filters[flower.color];
      return colorMatch;
    });

    const finalResult = filters.bug
      ? colorFiltered.filter((flower) => flower.bug)
      : colorFiltered;

    const bug = flowersData.filter((flower) => {
      const bugMatch = filters.bug && flower.bug;
      return bugMatch;
    });

    if (colorFiltered.length < 1 && finalResult.length < 1) {
      setFilteredFlowers(bug);
    } else if (finalResult.length > 0) {
      setFilteredFlowers(finalResult);
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
      <div className="grid md:grid-cols-5 gap-4 px-5 pb-16 bg-green-500 justify-center">
        {filteredFlowers.map((flower) => (
          <img className="rounded-xl" key={flower.id} src={flower.img_url} />
        ))}
      </div>
      <footer className="bg-green-500 w-full h-32 flex justify-center items-end pb-4 font-violetsans text-xl">
        <div className="border-4 border-black rounded-2xl p-4 bg-pink-400 text-center">
          <p className="">All rights reserved © Mattias Guittari</p>
          <p>Wild Code School 2024</p>
        </div>
      </footer>
    </>
  );
}
