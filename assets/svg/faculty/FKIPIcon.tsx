import * as React from "react";
import Svg, { Path } from "react-native-svg";

function FKIPIcon(props: any) {
    return (
        <Svg
            width={48}
            height={48}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M35.297 22.77v7.183c0 .47-.16.916-.462 1.269-1.378 1.621-5.813 6.015-13.18 5.679-7.301-.336-10.83-4.234-11.913-5.713a1.957 1.957 0 01-.37-1.15v-7.276"
                stroke="#AC67DE"
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
            <Path
                clipRule="evenodd"
                d="M3.382 18.898l18.33-7.846a.63.63 0 01.48-.009l19.64 7.838c.53.21.53.958.01 1.168l-19.835 8.233a.62.62 0 01-.504-.009l-18.13-8.216a.633.633 0 01.01-1.16z"
                stroke="#000"
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
            <Path
                d="M42.236 19.427v5.024"
                stroke="#000"
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
            <Path
                clipRule="evenodd"
                d="M39.464 30.609H45l-.571-5.587a.637.637 0 00-.63-.571h-3.134a.63.63 0 00-.63.571l-.571 5.587z"
                stroke="#AC67DE"
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
        </Svg>
    );
}

export default FKIPIcon;