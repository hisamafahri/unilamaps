import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SportIcon(props: any) {
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
                    d="M30.012 38.07l-.59 4.508M36.658 33.765H40.7M35.874 25.35l2.293-6.869M19.361 9.243V5.209M13.112 14.273l-5.436-.657M25.465 12.62l8.455-1.036M22.196 19.555l4.933 6.491M15.647 20.087l-4.489 7.09M15.502 34.597l9.431-.88"
                    stroke="#000"
                />
                <Path
                    d="M4.958 27.43l6.2-.252 4.344 7.42-2.573 5.271"
                    stroke="#AC67DE"
                />
                <Path
                    clipRule="evenodd"
                    d="M19.361 9.243l-6.249 5.03 2.535 5.814 6.549-.532 3.27-6.936-6.105-3.376z"
                    stroke="#AC67DE"
                />
                <Path d="M33.92 7.386v4.198l4.247 6.897 4.575.697" stroke="#AC67DE" />
                <Path
                    clipRule="evenodd"
                    d="M27.13 26.046l8.744-.697.784 8.417-6.646 4.304-5.079-4.353 2.196-7.671z"
                    stroke="#AC67DE"
                />
                <Path
                    d="M23.995 43.342c10.685 0 19.347-8.662 19.347-19.347S34.68 4.648 23.995 4.648 4.648 13.31 4.648 23.995s8.662 19.347 19.347 19.347z"
                    stroke="#000"
                />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0_703_611">
                    <Path fill="#fff" transform="translate(4 4)" d="M0 0h40v40H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
}

export default SportIcon;