import ParagraphHeader from "./ParagraphHeader";
import footerStyles from "./Footer.module.css";
import { styles } from "../styles";

import IconFacebook from "./icons/IconFacebook";
import IconGithub from "./icons/IconGithub";
import IconLinkedIn from "./icons/IconLinkedIn";
import IconDiscord from "./icons/IconDiscord";
import IconYoutube from "./icons/IconYoutube";
import { useLanguage } from "../contexts/LanguageContext";

/* eslint react/prop-types: 0 */
const Icon = ({ icon, href }) => {
  return (
    <li>
      <a href={href}>{icon}</a>
    </li>
  );
};

const footerIcons = [
  { icon: <IconFacebook />, href: "https://www.facebook.com/cbhuber/" },
  { icon: <IconGithub />, href: "https://github.com/cbhuber17" },
  { icon: <IconLinkedIn />, href: "https://www.linkedin.com/in/cbhuber/" },
  {
    icon: <IconDiscord />,
    href: "https://www.discordapp.com/users/1017575401406611526",
  },
  { icon: <IconYoutube />, href: "https://www.youtube.com/@cbhuber" },
];

let numIcons = window.innerWidth < 500 ? 3 : footerIcons.length;

const Footer = () => {
  const { isForeign } = useLanguage();
  return (
    <>
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        {isForeign ? (
          <ParagraphHeader
            pText="Tìm Anh"
            hText="Truyền Thông Xã Hội."
            style=""
          />
        ) : (
          <ParagraphHeader pText="Find me" hText="Social Media." style="" />
        )}
      </div>
      <footer style={footerStyles.footer}>
        <ul>
          {footerIcons.map((footerIcon, index) =>
            index < numIcons ? <Icon key={index} {...footerIcon} /> : ""
          )}
        </ul>
      </footer>
    </>
  );
};

export default Footer;
