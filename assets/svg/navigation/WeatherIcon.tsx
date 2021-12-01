import * as React from "react";
import Svg, { Path } from "react-native-svg";

function WeatherIcon(props: any) {
    return (
        <Svg
            width={32}
            height={32}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path fill="#fff" d="M0 0h32v32H0z" />
            <Path
                d="M16.65 10.139a5.482 5.482 0 015.358 4.312 5.469 5.469 0 014.984 5.425c0 3.006-2.459 5.445-5.483 5.445H9.697v-.02c-.067 0-.134.02-.211.02-3.361 0-6.012-2.996-5.397-6.444.355-1.978 1.853-3.62 3.774-4.206a5.466 5.466 0 013.38.048 5.476 5.476 0 015.406-4.58z"
                stroke={props.strokeColor}
                strokeWidth={2}
                strokeMiterlimit={10}
            />
            <Path
                clipRule="evenodd"
                d="M22.008 14.45c1.488.135 2.794.836 3.687 1.921C27.165 15.344 28 13.634 28 11.704A5.705 5.705 0 0022.296 6a5.689 5.689 0 00-5.474 4.12c2.497.124 4.677 1.949 5.186 4.33z"
                stroke={props.strokeColor}
                strokeWidth={2}
                strokeMiterlimit={10}
            />
        </Svg>
    );
}

export default WeatherIcon;