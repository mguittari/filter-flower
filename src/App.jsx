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
    // Filtrer les fleurs en fonction de la couleur sélectionnée
    const colorFiltered = flowersData.filter((flower) => {
      const colorMatch = filters[flower.color];
      return colorMatch;
    });

    console.info("Color -->", colorFiltered);

    // Si le filtre "bug" est activé, filtrer encore pour ne garder que les fleurs avec des insectes
    const finalResult = filters.bug
      ? colorFiltered.filter((flower) => flower.bug)
      : colorFiltered;

    console.info("Final result", finalResult);

    const bug = flowersData.filter((flower) => {
      const bugMatch = filters.bug && flower.bug;
      return bugMatch;
    });

    console.info("bug -->", bug);
    if (colorFiltered.length < 1 && finalResult < 1) {
      setFilteredFlowers(bug);
    } else {
      setFilteredFlowers(finalResult.length > 0 ? finalResult : flowers);
    }

    // Mettre à jour les fleurs filtrées, ou toutes les fleurs si aucun résultat
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

// const handleClickFilter = () => {
//   const result = flowersData.filter((flower) => {
//     const bugMatch = filters.bug && flower.bug;
//     const colorMatch = filters[flower.color];
//     console.info("bug?", bugMatch);
//     console.info("color?", colorMatch);
//     if (colorMatch && bugMatch) {
//       return colorMatch && bugMatch;
//     }
//     return colorMatch || bugMatch;
//   });
// console.info("Filtered data -->", result);
//   setFilteredFlowers(result);
//   if (result.length === 0) {
//     setFilteredFlowers(flowers);
//   }
// };
