import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SunnyCloudIcon(props: any) {
    return (
        <Svg
            width={320}
            height={320}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M143.22 127.869c8.643-16.665 26.053-28.051 46.122-28.051 28.676 0 51.922 23.247 51.922 51.923 0 17.453-8.612 32.896-21.818 42.31"
                stroke="#000"
                strokeWidth={24}
            />
            <Path
                d="M277.453 153.314h-15.734"
                stroke="#000"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M288 153.314h-15.734"
                stroke="#231815"
                strokeWidth={24}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M273.492 204.829l-13.627-7.867"
                stroke="#3E1B72"
                strokeWidth={24}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M232.036 228.834l-7.867-13.626"
                stroke="#231815"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M145.08 83.135l-7.867-13.626"
                stroke="#231815"
                strokeWidth={24}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M187.768 70.734V55"
                stroke="#3E1B72"
                strokeWidth={24}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M232.798 77.726l7.867-13.626"
                stroke="#231815"
                strokeWidth={24}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M262.74 107.478l13.627-7.867M79.388 265.027C53.216 265.027 32 244.363 32 218.873c0-22.264 16.186-40.846 37.723-45.193 7.404-27.127 32.793-47.114 62.976-47.114 34.121 0 62.116 25.544 64.926 58.069 20.207 2.702 35.772 19.584 35.772 40.007 0 22.304-18.564 40.385-41.464 40.385H79.388z"
                stroke="#3E1B72"
                strokeWidth={24}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

export default SunnyCloudIcon;