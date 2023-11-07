import selectStyles from "./Select.module.css";

/* eslint react/prop-types: 0 */
// Select pull down menu
function Select({ options, value, onChange, ...props }) {
  return (
    <select
      className={selectStyles.select}
      value={value}
      onChange={onChange}
      {...props}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
