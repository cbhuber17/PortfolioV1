import Switch from "react-switch";

/* eslint react/prop-types: 0 */
const LanguageSwitch = ({ checked, switchChange, isMobile }) => {
  return (
    <div id="lang" className="text-white sm:ml-5 ml-0 flex gap-2 items-center">
      🇨🇦 ENG
      <Switch
        checked={checked}
        onChange={switchChange}
        hidden={false}
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        handleDiameter={isMobile ? 20 : 30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={isMobile ? 15 : 20}
        width={isMobile ? 35 : 48}
        className="react-switch"
        id="lang-switch"
      />
      VIE 🇻🇳
    </div>
  );
};

export default LanguageSwitch;
