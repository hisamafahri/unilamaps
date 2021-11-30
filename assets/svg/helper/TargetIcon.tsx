import * as React from "react";
import Svg, { Path } from "react-native-svg";

function TargetIcon(props: any) {
  return (
    <Svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 12.51a2.509 2.509 0 100-5.019 2.509 2.509 0 000 5.018z"
        stroke="#000"
        strokeWidth={1.35}
        strokeMiterlimit={10}
      />
      <Path
        d="M10 16.59a6.59 6.59 0 100-13.18 6.59 6.59 0 000 13.18z"
        stroke="#000"
        strokeWidth={1.35}
        strokeMiterlimit={10}
      />
      <Path
        d="M10 3.41V.91M3.41 10H.91M10 16.59v2.5M16.59 10h2.5"
        stroke="#000"
        strokeWidth={1.35}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default TargetIcon;