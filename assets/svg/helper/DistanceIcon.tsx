import * as React from "react";
import Svg, { Path } from "react-native-svg";

function DistanceIcon(props: any) {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M10.828 9.828a4 4 0 10-5.656 0L8 12.658l2.828-2.83zM8 7v.01M18.828 17.828a4 4 0 10-5.656 0L16 20.657l2.828-2.83zM16 15v.01"
                stroke="#000"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

export default DistanceIcon;