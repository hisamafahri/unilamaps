import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ContactIcon(props: any) {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M10 21v-6.5a3.5 3.5 0 10-7 0V21h18v-6a4 4 0 00-4-4H6.5"
                stroke="#B9D4DC"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M12 11V3h4l2 2-2 2h-4M6 15h1"
                stroke="#B9D4DC"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

export default ContactIcon;