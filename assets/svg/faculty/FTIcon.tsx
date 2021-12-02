import * as React from "react";
import Svg, { Path } from "react-native-svg";

function FTIcon(props: any) {
    return (
        <Svg
            width={48}
            height={48}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M23.91 13.332l1.84-1.84c.108-.109.176-.26.176-.42V5.276c0-.16-.06-.31-.177-.42L23.893 3"
                stroke={props.strokePurple}
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
            <Path
                d="M23.884 13.332l-1.84-1.84a.598.598 0 01-.176-.42V5.276c0-.16.06-.31.177-.42L23.9 3"
                stroke={props.strokePurple}
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
            <Path
                d="M23.91 29.426v9.4M23.91 21.631a4.15 4.15 0 100-8.299 4.15 4.15 0 000 8.3z"
                stroke={props.strokeBlack}
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
            <Path
                d="M20.592 19.951L8.168 41.01a.612.612 0 00-.067.454l.915 3.528 13.852-23.504M27.236 19.951L39.66 41.018c.084.135.1.303.067.454L38.81 45 24.96 21.488"
                stroke={props.strokeBlack}
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
            <Path
                d="M39.82 22.614C37.626 29.3 31.326 34.13 23.91 34.13c-7.418 0-13.718-4.83-15.91-11.516"
                stroke={props.strokePurple}
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
        </Svg>
    );
}

export default FTIcon;