import * as React from "react";
import Svg, { Path } from "react-native-svg";

function FPIcon(props: any) {
    return (
        <Svg
            width={48}
            height={48}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                clipRule="evenodd"
                d="M32 9.905c-1.563 1.076-2.352 2.84-2.294 4.604 1.63.68 3.554.555 5.117-.52 1.562-1.076 2.352-2.84 2.293-4.604a5.31 5.31 0 00-5.116.52z"
                stroke={props.strokeBlack}
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
            <Path
                clipRule="evenodd"
                d="M27.363 9.905c1.562 1.076 2.352 2.84 2.293 4.604a5.355 5.355 0 01-5.116-.52c-1.563-1.076-2.352-2.84-2.293-4.604a5.308 5.308 0 015.116.52z"
                stroke={props.strokeBlack}
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
            <Path
                clipRule="evenodd"
                d="M27.186 7.503c0 1.898.992 3.553 2.479 4.503a5.331 5.331 0 000-9.006 5.331 5.331 0 00-2.479 4.503z"
                stroke={props.strokeBlack}
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
            <Path
                d="M29.69 20.936l-.009-8.939"
                stroke={props.strokeBlack}
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
            <Path
                d="M40.2 29.21s-1.27-3.2-4.78-3.94a1.922 1.922 0 01-1.454-1.276c-.412-1.202-1.479-2.957-4.268-3.058-2.831-.11-3.89 1.63-4.284 2.814a1.546 1.546 0 01-1.378 1.058c-1.546.11-4.175.681-4.957 3.252"
                stroke={props.strokePurple}
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
            <Path
                d="M23.213 34.226c1.083-.605 3.503 1.57 7.25 1.932 3.746.361 2.654-2.42 2.654-2.42l-10.526-5.157a5.841 5.841 0 00-4.226-.362l-5.191 1.53"
                stroke={props.strokeBlack}
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
            <Path
                d="M13.199 39.434c1.193-.638 3.226-1.445 5.553-.94l9.93 1.848a5.79 5.79 0 005.006-1.454l9.317-8.619c.773-.714.034-1.974-.966-1.655L30.26 32.352"
                stroke={props.strokeBlack}
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
            <Path
                d="M13.19 29.757l-8.703 3.242a.743.743 0 00-.487.698v10.56c0 .596.672.949 1.16.613l8.03-5.444M13.19 29.757l.009 9.677"
                stroke={props.strokePurple}
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
        </Svg>
    );
}

export default FPIcon;