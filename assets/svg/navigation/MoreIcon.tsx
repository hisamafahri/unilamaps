import * as React from "react";
import Svg, { Path } from "react-native-svg";

function MoreIcon(props: any) {
    return (
        <Svg
            width={32}
            height={32}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path fill="#fff" d="M0 0h32v32H0z" />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.668 18.335A2.669 2.669 0 014 15.668 2.669 2.669 0 016.668 13a2.663 2.663 0 012.667 2.668c0 1.477-1.2 2.667-2.667 2.667zm9.332 0a2.663 2.663 0 01-2.668-2.667A2.663 2.663 0 0116 13a2.663 2.663 0 012.668 2.668A2.663 2.663 0 0116 18.335zm9.332 0a2.663 2.663 0 01-2.667-2.667c0-1.477 1.2-2.668 2.667-2.668A2.663 2.663 0 0128 15.668a2.663 2.663 0 01-2.668 2.667z"
                fill={props.strokeColor}
            />
        </Svg>
    );
}

export default MoreIcon;