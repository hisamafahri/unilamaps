import * as React from "react";
import Svg, { Path } from "react-native-svg";

function WindIcon(props: any) {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M5 8h8.5a2.5 2.5 0 10-2.34-3.24M3 12h15.5a2.5 2.5 0 11-2.34 3.24M4 16h5.5a2.5 2.5 0 11-2.34 3.24"
                stroke="#434445"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

export default WindIcon;