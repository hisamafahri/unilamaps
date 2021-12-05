import * as React from "react";
import Svg, { Path } from "react-native-svg";

function CodeIcon(props: any) {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M7 8l-4 4 4 4M17 8l4 4-4 4M14 4l-4 16"
                stroke="#B9D4DC"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

export default CodeIcon;