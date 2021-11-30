import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function FoodIcon(props: any) {
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
                    d="M37.664 4.658L27.478 20.503M29.809 18.123L43.342 7.366"
                    stroke="#000"
                    strokeLinecap="round"
                />
                <Path
                    d="M14.767 24.46a2.745 2.745 0 012.747-2.748 2.745 2.745 0 012.747 2.747"
                    stroke="#AC67DE"
                />
                <Path
                    d="M10.81 24.46a6.717 6.717 0 016.714-6.714 6.717 6.717 0 016.713 6.713M30.35 24.46a2.745 2.745 0 012.748-2.748 2.745 2.745 0 012.747 2.747"
                    stroke="#AC67DE"
                />
                <Path
                    d="M33.108 17.746a6.688 6.688 0 00-5.717 3.212c-1.442-4.063-5.311-6.975-9.867-6.975-5.785 0-10.477 4.692-10.477 10.476h32.765a6.703 6.703 0 00-6.704-6.713z"
                    stroke="#AC67DE"
                />
                <Path
                    d="M5.17 24.46h36.421c.339 0 .59.319.503.648-.783 2.902-4.798 14.597-18.718 14.742-13.93.145-17.935-11.811-18.708-14.752a.51.51 0 01.503-.639z"
                    stroke="#000"
                />
                <Path
                    d="M14.97 38.148v4.207c0 .29.232.523.522.523h15.42c.28 0 .512-.223.522-.513l.087-4.218"
                    stroke="#000"
                />
                <Path
                    d="M32.711 34.423s2.738-1.219 4.382-4.382"
                    stroke="#AC67DE"
                    strokeLinecap="round"
                />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0_703_611">
                    <Path fill="#fff" transform="translate(4 4)" d="M0 0h40v39.526H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
}

export default FoodIcon;