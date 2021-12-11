import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ExploreIcon(props: any) {
    return (
        <Svg
            width={32}
            height={32}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onPress={props.onPress}
            {...props}
        >
            <Path fill="#fff" d="M0 0h32v32H0z" />
            <Path
                d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12z"
                stroke={props.strokeColor}
                strokeWidth={2}
                strokeMiterlimit={10}
            />
            <Path
                clipRule="evenodd"
                d="M18.38 18.794l-7.094 2.553 2.208-7.44 7.44-2.208-2.553 7.095z"
                stroke={props.strokeColor}
                strokeWidth={2}
                strokeMiterlimit={10}
            />
        </Svg>
    );
}

export default ExploreIcon;