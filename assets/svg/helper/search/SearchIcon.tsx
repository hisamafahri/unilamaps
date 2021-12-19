import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SearchIcon(props: any) {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M10 17a7 7 0 100-14 7 7 0 000 14zM21 21l-6-6"
                stroke="#000"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

export default SearchIcon;