import React from "react";
import Social from "./Social";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import FindUs from "./FindUs";
import Q_Zone from "./Q_Zone";

const RightAside = () => {
  return (
    <div>
      <Social></Social>

      <FindUs></FindUs>

      <Q_Zone></Q_Zone>

    </div>
  );
};

export default RightAside;
