import * as React from "react";
import Svg, { Path } from "react-native-svg";

function FEBIcon(props: any) {
    return (
        <Svg
            width={48}
            height={48}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M23.933 3l-.05 19.32M31.04 10.115L23.933 3l-6.972 6.98M13.786 22.32l.034-8.971M9.074 18.095l4.746-4.746 4.729 4.729M34.887 22.32l.033-8.71M30.183 18.355l4.737-4.746 4.73 4.73"
                stroke="#AC67DE"
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
            <Path
                d="M23.572 45c6.263 0 11.34-5.077 11.34-11.34s-5.077-11.34-11.34-11.34-11.34 5.077-11.34 11.34S17.309 45 23.572 45z"
                stroke="#000"
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
            <Path
                clipRule="evenodd"
                d="M33.98 22.32a9.693 9.693 0 00-4.99 1.378 11.294 11.294 0 00-10.492-.168 9.706 9.706 0 00-4.712-1.21C8.376 22.32 4 26.705 4 32.106c0 5.41 4.385 9.786 9.786 9.786.622 0 1.218-.067 1.806-.176A11.284 11.284 0 0023.572 45c3.167 0 6.031-1.302 8.09-3.402a9.63 9.63 0 002.318.286c5.41 0 9.786-4.385 9.786-9.786 0-5.402-4.385-9.778-9.786-9.778z"
                stroke="#000"
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
            <Path
                d="M27.125 30.468s-.176-2.554-3.167-2.251c-1.604.16-2.326.848-2.629 1.663-.529 1.411.227 3.058 1.655 3.553.286.101.605.177.983.219a6.063 6.063 0 011.621.42c1.226.529 1.915 1.915 1.352 3.124-.37.798-1.192 1.722-2.965 1.647-3.393-.151-3.393-2.596-3.393-2.596M23.84 28.192v-2.243M23.84 38.843v2.327"
                stroke="#AC67DE"
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
        </Svg>
    );
}

export default FEBIcon;