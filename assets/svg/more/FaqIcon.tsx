import * as React from "react";
import Svg, { Path } from "react-native-svg";

function FaqIcon(props: any) {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M10 17a7 7 0 100-14 7 7 0 000 14zM21 21l-6-6M10 13v.01M10 10a1.5 1.5 0 10-1.14-2.474"
                stroke="#B9D4DC"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

export default FaqIcon;