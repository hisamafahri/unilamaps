import * as React from "react";
import Svg, { Path } from "react-native-svg";

function LocationIcon(props: any) {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M12 14a3 3 0 100-6 3 3 0 000 6z"
                stroke="#AC67DE"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0v0z"
                stroke="#AC67DE"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

export default LocationIcon;