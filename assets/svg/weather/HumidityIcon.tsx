import * as React from "react";
import Svg, { Path } from "react-native-svg";

function HumidityIcon(props: any) {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M6.8 11a6 6 0 1010.396 0l-5.197-8-5.2 8H6.8z"
                stroke="#434445"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

export default HumidityIcon;