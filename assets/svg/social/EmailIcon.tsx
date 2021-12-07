import * as React from "react";
import Svg, { Path } from "react-native-svg";

function EmailIcon(props: any) {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M12 16a4 4 0 100-8 4 4 0 000 8z"
                stroke="#AC67DE"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M16 12v1.5a2.5 2.5 0 105 0V12a9 9 0 10-5.5 8.28"
                stroke="#AC67DE"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

export default EmailIcon;