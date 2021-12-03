import * as React from "react";
import Svg, { Path } from "react-native-svg";

function CloudIcon(props: any) {
    return (
        <Svg
            width={320}
            height={320}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M92.235 248C58.968 248 32 221.734 32 189.334c0-28.301 20.574-51.921 47.95-57.446C89.362 97.406 121.634 72 160 72c43.372 0 78.958 32.47 82.529 73.813C268.214 149.247 288 170.706 288 196.666 288 225.018 264.402 248 235.294 248H92.235z"
                stroke="#3E1B72"
                strokeWidth={24}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

export default CloudIcon;