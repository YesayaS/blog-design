import {
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoTiktok,
  IoLogoInstagram,
  IoLogoFacebook,
} from "react-icons/io5";

import "./followSocials.scss";

export default function FollowSocials() {
  return (
    <div className="follow-socials">
      <div className="follow-text"> Follow us on socials </div>
      <div className="follow-logos">
        <a href="">
          <IoLogoYoutube />
        </a>
        <a href="">
          <IoLogoTwitter />
        </a>
        <a href="">
          <IoLogoTiktok />
        </a>
        <a href="">
          <IoLogoInstagram />
        </a>
        <a href="">
          <IoLogoFacebook />
        </a>
      </div>
    </div>
  );
}
