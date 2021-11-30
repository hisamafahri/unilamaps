import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function ParkingIcon(props: any) {
    return (
        <Svg
            width={48}
            height={48}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G
                clipPath="url(#prefix__clip0_703_611)"
                strokeWidth={1.35}
                strokeMiterlimit={10}
            >
                <Path
                    d="M25.255 31.492v6.955a.49.49 0 00.126.32l3.83 3.83c.281.28.078.764-.319.755l-10.66-.02a.44.44 0 01-.31-.754l3.822-3.821a.43.43 0 00.125-.32v-6.955"
                    stroke="#000"
                />
                <Path
                    d="M31.069 7.415h-14.79a2.95 2.95 0 00-2.951 2.95v15.458a2.919 2.919 0 002.921 2.922h14.82a2.915 2.915 0 002.912-2.912V10.327a2.92 2.92 0 00-2.912-2.912zm-3.318 10.94c-1.074 1.016-2.69 1.47-4.547 1.47-.416 0-.793-.018-1.093-.057v4.972h-3.095V10.994c.967-.165 2.331-.29 4.256-.29 1.944 0 3.328.367 4.266 1.112.89.706 1.49 1.857 1.49 3.221.01 1.374-.455 2.535-1.277 3.318z"
                    stroke="#AC67DE"
                />
                <Path
                    d="M23.427 13.083c-.639 0-1.074.059-1.316.126v4.111c.3.058.62.078 1.074.078 1.674 0 2.709-.851 2.709-2.274 0-1.276-.89-2.04-2.467-2.04z"
                    stroke="#AC67DE"
                />
                <Path
                    d="M14.324 4.658h18.65a3.674 3.674 0 013.677 3.676v19.492a3.674 3.674 0 01-3.676 3.676H14.324a3.674 3.674 0 01-3.676-3.676V8.324a3.685 3.685 0 013.676-3.666z"
                    stroke="#000"
                />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0_703_611">
                    <Path fill="#fff" transform="translate(10 4)" d="M0 0h27.308v40H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
}

export default ParkingIcon;