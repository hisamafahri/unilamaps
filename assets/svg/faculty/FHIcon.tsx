import * as React from "react";
import Svg, { Path } from "react-native-svg";

function FHIcon(props: any) {
    return (
        <Svg
            width={48}
            height={48}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M9.444 14.946L3 29.935C3 32.9 5.823 35.47 9.335 35.47s6.335-2.78 6.335-5.746l-6.226-14.78zM3 29.934h12.67M38.791 14.946l-6.47 14.989c0 2.965 2.824 5.536 6.336 5.536 3.512 0 6.335-2.78 6.335-5.746l-6.2-14.78zM32.33 29.934H45"
                stroke={props.strokePurple}
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
            <Path
                clipRule="evenodd"
                d="M24.282 7.032l14.19 4.957a.49.49 0 01.328.462v2.495H9.444V12.45a.49.49 0 01.328-.463l14.19-4.956a.42.42 0 01.32 0z"
                stroke={props.strokeBlack}
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
            <Path
                d="M26.483 14.946v21.223M21.753 14.946v21.223l9.031.075c.126 0 .252.05.336.143l2.244 2.243a.49.49 0 01.143.345v2.234a.488.488 0 01-.488.488H15.527a.488.488 0 01-.487-.488v-2.218a.49.49 0 01.142-.344l2.328-2.327a.49.49 0 01.344-.143l3.899-.008M24.105 11.762a.328.328 0 100-.656.328.328 0 000 .656z"
                stroke={props.strokeBlack}
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
        </Svg>
    );
}

export default FHIcon;