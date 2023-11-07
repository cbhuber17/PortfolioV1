// import styled from "styled-components";
import selectStyles from "./Select.module.css";

// const StyledSelect = styled.select`
// font-size: 1.4rem;
// padding: 0.8rem 1.2rem;
// border: 1px solid
//   ${(props) =>
//     props.type === "white"
//       ? "var(--color-grey-100)"
//       : "var(--color-grey-300)"};
// border-radius: var(--border-radius-sm);
// background-color: var(--color-grey-0);
// font-weight: 500;
// box-shadow: var(--shadow-sm);
// `;

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
