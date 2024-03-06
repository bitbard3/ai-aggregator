import React from "react";
import Dotloader from "react-spinners/DotLoader";
export default function Loader() {
  return <Dotloader color="#f0f0f0" loading size={60} speedMultiplier={1.3} />;
}
