import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function ToiletIcon(props: any) {
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
                    d="M14.891 18.23a4.305 4.305 0 100-8.61 4.305 4.305 0 000 8.61z"
                    stroke="#AC67DE"
                    strokeLinecap="round"
                />
                <Path
                    d="M34.083 18.23a4.305 4.305 0 100-8.61 4.305 4.305 0 000 8.61zM24.487 4.658v38.684"
                    stroke="#000"
                    strokeLinecap="round"
                />
                <Path
                    d="M10.132 22.031h9.509c.29 0 .503.252.474.533L17.358 39.26a.487.487 0 01-.474.406h-3.986a.487.487 0 01-.474-.406L9.658 22.564a.479.479 0 01.474-.533z"
                    stroke="#000"
                />
                <Path
                    d="M38.833 39.666h-9.509a.478.478 0 01-.474-.532l2.757-16.696a.487.487 0 01.474-.407h3.985c.233 0 .436.175.474.407l2.758 16.696a.46.46 0 01-.465.532z"
                    stroke="#AC67DE"
                />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0_703_611">
                    <Path fill="#fff" transform="translate(9 4)" d="M0 0h30.965v40H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
}

export default ToiletIcon;