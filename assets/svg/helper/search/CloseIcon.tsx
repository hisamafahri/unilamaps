import * as React from "react";
import Svg, { Path } from "react-native-svg";

function CloseIcon(props: any) {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onPress={props.onPress}
            {...props}
        >
            <Path fill="#fff" d="M0 0h24v24H0z" />
            <Path
                d="M18 6L6 18M6 6l12 12"
                stroke="#000"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

export default CloseIcon;