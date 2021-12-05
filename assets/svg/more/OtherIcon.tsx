import * as React from "react";
import Svg, { Path } from "react-native-svg";

function OtherIcon(props: any) {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"
                stroke="#B9D4DC"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M13 3h-2a2 2 0 100 4h2a2 2 0 100-4zM9 12h.01M13 12h2M9 16h.01M13 16h2"
                stroke="#B9D4DC"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

export default OtherIcon;