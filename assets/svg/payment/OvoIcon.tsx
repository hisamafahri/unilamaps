import * as React from "react";
import Svg, { Circle } from "react-native-svg";

function OvoIcon(props: any) {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={12} cy={12} r={7.375} stroke="#000" strokeWidth={1.25} />
            <Circle cx={12} cy={12} r={4.375} stroke="#000" strokeWidth={1.25} />
        </Svg>
    );
}

export default OvoIcon;