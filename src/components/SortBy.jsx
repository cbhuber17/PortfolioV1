// import { useSearchParams } from "react-router-dom";
import Select from "./Select";

/* eslint react/prop-types: 0 */
function SortBy({ options, sortBy, setSortBy }) {
  function handleChange(e) {
    setSortBy(e.target.value);
  }

  return (
    // Select pull down menu
    <Select options={options} value={sortBy} onChange={handleChange} />
  );
}

export default SortBy;
