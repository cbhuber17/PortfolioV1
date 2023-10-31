import ParagraphHeader from "./ParagraphHeader";
import footerStyles from "./Footer.module.css";
import { styles } from "../styles";

import IconFacebook from "./icons/IconFacebook";
import IconGithub from "./icons/IconGithub";
import IconLinkedIn from "./icons/IconLinkedIn";
import IconDiscord from "./icons/IconDiscord";
import IconYoutube from "./icons/IconYoutube";

const Footer = () => {
  return (
    <>
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <ParagraphHeader pText="Find me" hText="Social Media." style="" />
      </div>
      <footer style={footerStyles.footer}>
        <ul>
          <li>
            <a href="https://www.facebook.com/cbhuber/">
              <IconFacebook />
            </a>
          </li>
          <li>
            <a href="https://github.com/cbhuber17">
              <IconGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/cbhuber/">
              <IconLinkedIn />
            </a>
          </li>
          <li>
            <a href="https://www.discordapp.com/users/1017575401406611526">
              <IconDiscord />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@cbhuber">
              <IconYoutube />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
