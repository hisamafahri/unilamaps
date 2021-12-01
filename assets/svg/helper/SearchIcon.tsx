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
            <Path fill="#EEF4F6" d="M0 0h24v24H0z" />
            <Path
                clipRule="evenodd"
                d="M2.001 10.277c.091 4.484 3.793 8.049 8.276 7.958a8.112 8.112 0 005.657-2.446 8.13 8.13 0 002.31-5.83c-.091-4.483-3.793-8.048-8.276-7.957-4.493.082-8.048 3.783-7.967 8.276z"
                stroke="#000"
                strokeWidth={2}
                strokeMiterlimit={10}
            />
            <Path
                d="M21.954 22l-6.111-6.111"
                stroke="#000"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
        </Svg>
    );
}

export default SearchIcon;