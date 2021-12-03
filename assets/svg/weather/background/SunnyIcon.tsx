import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SunnyIcon(props: any) {
    return (
        <Svg
            width={320}
            height={320}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                clipRule="evenodd"
                d="M221.552 160c0 33.994-27.558 61.552-61.552 61.552S98.448 193.994 98.448 160 126.006 98.448 160 98.448s61.552 27.558 61.552 61.552z"
                stroke="#3E1B72"
                strokeWidth={24}
            />
            <Path
                d="M288 160h-27.279M59.279 160H32"
                stroke="#000"
                strokeWidth={24}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M271.213 224l-24.131-13.639M72.918 109.639L48.787 96"
                stroke="#3E1B72"
                strokeWidth={24}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M224 271.213l-13.639-24.131M109.639 72.918L96 48.787"
                stroke="#000"
                strokeWidth={24}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M160 288v-27.279M160 59.279V32"
                stroke="#3E1B72"
                strokeWidth={24}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M96 271.213l13.639-24.131M210.361 72.918L224 48.787"
                stroke="#000"
                strokeWidth={24}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M48.787 224l24.131-13.639M247.082 109.639L271.213 96"
                stroke="#3E1B72"
                strokeWidth={24}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

export default SunnyIcon;