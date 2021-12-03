import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SnowIcon(props: any) {
    return (
        <Svg
            width={320}
            height={320}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M250.478 69.522L69.522 250.478M250.478 250.478L69.522 69.522"
                stroke="#000"
                strokeWidth={24}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M160 32v256M288 160H32M52.7 122.917L89.783 160 52.7 197.083M267.3 197.01L230.216 160l37.084-37.083M122.917 267.301L160 230.217l37.083 37.084M197.083 52.7L160 89.71 122.917 52.7"
                stroke="#3E1B72"
                strokeWidth={24}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

export default SnowIcon;