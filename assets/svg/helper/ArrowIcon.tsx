import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ArrowIcon(props: any) {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path fill="#EEF4F6" d="M0 0h24v24H0z" />
            <Path
                d="M5 12h14M5 12l6 6M5 12l6-6"
                stroke="#000"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

export default ArrowIcon;