import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ThunderstormIcon(props: any) {
    return (
        <Svg
            width={320}
            height={320}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M232 216h3.294C264.402 216 288 193.018 288 164.666c0-25.96-19.786-47.419-45.471-50.853C238.958 72.47 203.372 40 160 40c-38.366 0-70.638 25.406-80.05 59.888C52.574 105.413 32 129.033 32 157.334c0 31.013 24.709 56.406 56 58.524"
                stroke="#000"
                strokeWidth={24}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M175.846 201.498c-.329-.957-1.147-1.648-2.12-1.792l-29.768-4.413 13.656-31.439a2.818 2.818 0 00-.199-2.607A2.634 2.634 0 00155.19 160h-41.572c-1.429 0-2.6 1.166-2.652 2.638l-1.914 55.87c-.048 1.396.933 2.605 2.274 2.804l20.696 3.072-27.691 51.557c-.649 1.213-.319 2.732.77 3.545.469.348 1.01.514 1.552.514a2.61 2.61 0 001.951-.885l66.698-74.849a2.802 2.802 0 00.544-2.768z"
                fill="#3E1B72"
            />
            <Path
                d="M189 220.363L203.066 196"
                stroke="#3E1B72"
                strokeWidth={24}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

export default ThunderstormIcon;