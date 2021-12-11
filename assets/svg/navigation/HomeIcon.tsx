import * as React from "react";
import Svg, { Path } from "react-native-svg";

function HomeIcon(props: any) {
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
                d="M4 16.597L15.295 5.293a.996.996 0 011.41 0L28 16.587"
                stroke={props.strokeColor}
                strokeWidth={2}
                strokeMiterlimit={10}
            />
            <Path
                d="M7.672 12.916V25.91c0 .16.13.28.28.28h15.796c.16 0 .28-.13.28-.28V12.916"
                stroke={props.strokeColor}
                strokeWidth={2}
                strokeMiterlimit={10}
            />
            <Path
                d="M16.005 22.33a3.882 3.882 0 100-7.763 3.882 3.882 0 000 7.763z"
                stroke={props.strokeColor}
                strokeWidth={2}
                strokeMiterlimit={10}
            />
        </Svg>
    );
}

export default HomeIcon;