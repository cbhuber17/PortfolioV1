import Switch from "react-switch";

/* eslint react/prop-types: 0 */
const LanguageSwitch = ({ checked, switchChange }) => {
  return (
    <div id="lang" className="ml-5 flex gap-2 items-center">
      🇨🇦 ENG
      <Switch
        checked={checked}
        onChange={switchChange}
        hidden={false}
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={20}
        width={48}
        className="react-switch"
        id="lang-switch"
      />
      VIE 🇻🇳
    </div>
  );
};

export default LanguageSwitch;
