import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function PrayIcon(props: any) {
  return (
    <Svg
      width={48}
      height={48}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        clipPath="url(#prefix__clip0_703_611)"
        strokeWidth={1.35}
        strokeMiterlimit={10}
      >
        <Path
          d="M17.218 37.49l3.337-4.044a5.76 5.76 0 001.325-3.685V5.635c0-1.064-1.46-1.364-1.876-.387l-6.26 14.54a5.198 5.198 0 00-.328 3.037l.88 4.585c.174.88-.125 1.78-.783 2.39l-2.08 1.905"
          stroke="#000"
        />
        <Path
          clipRule="evenodd"
          d="M10.301 30.573l8.116 8.116c.31.31.31.813 0 1.122l-3.299 3.299a.794.794 0 01-1.122 0L5.88 34.994a.794.794 0 010-1.122l3.299-3.299a.794.794 0 011.122 0z"
          stroke="#AC67DE"
        />
        <Path
          d="M21.88 16.227s-3.57-1.286-3.57 3.096v4.082"
          stroke="#000"
          strokeLinecap="round"
        />
        <Path
          d="M30.18 37.49l-3.337-4.044a5.76 5.76 0 01-1.326-3.685V5.635c0-1.064 1.461-1.364 1.877-.387l6.259 14.54c.416.957.522 2.02.329 3.037l-.88 4.585c-.175.88.125 1.78.783 2.39l2.08 1.905"
          stroke="#000"
        />
        <Path
          clipRule="evenodd"
          d="M37.087 30.573l-8.116 8.116a.794.794 0 000 1.122l3.299 3.299c.31.31.812.31 1.122 0l8.116-8.116a.794.794 0 000-1.122l-3.299-3.299a.794.794 0 00-1.122 0z"
          stroke="#AC67DE"
        />
        <Path
          d="M25.517 16.227s3.57-1.286 3.57 3.096v4.082"
          stroke="#000"
          strokeLinecap="round"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_703_611">
          <Path fill="#fff" transform="translate(5 4)" d="M0 0h37.398v40H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default PrayIcon;