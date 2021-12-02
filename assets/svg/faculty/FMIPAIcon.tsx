import * as React from "react";
import Svg, { Path } from "react-native-svg";

function FMIPAIcon(props: any) {
    return (
        <Svg
            width={48}
            height={48}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M31.386 43.287a4.728 4.728 0 100-9.456 4.728 4.728 0 000 9.456zM40.272 28.372a4.728 4.728 0 100-9.457 4.728 4.728 0 000 9.457zM21.342 8.728h5.316M21.342 38.56h5.316M14.22 12.768l-4.073 6.82M33.78 12.768l4.073 6.845M37.887 27.641l-4.107 6.887M10.189 27.708l4.065 6.786M29.303 12.961l-3.19 6.458M18.722 12.936l3.191 6.483M21.913 27.86l-3.225 6.483M26.053 27.86l3.259 6.483"
                stroke={props.strokeBlack}
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
            <Path
                d="M12.457 23.644h6.819-6.82zM28.724 23.644h6.82"
                stroke={props.strokeBlack}
                strokeWidth={1.35}
                strokeMiterlimit={10}
            />
            <Path
                d="M23.996 28.372a4.728 4.728 0 100-9.457 4.728 4.728 0 000 9.457zM31.386 13.457a4.728 4.728 0 100-9.457 4.728 4.728 0 000 9.457zM16.614 13.457a4.728 4.728 0 100-9.457 4.728 4.728 0 000 9.457zM16.614 43.287a4.728 4.728 0 100-9.456 4.728 4.728 0 000 9.456zM7.728 28.372a4.728 4.728 0 100-9.457 4.728 4.728 0 000 9.457z"
                stroke={props.strokePurple}
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
        </Svg>
    );
}

export default FMIPAIcon;