import * as React from "react";
import Svg, { Path } from "react-native-svg";

function FKIcon(props: any) {
    return (
        <Svg
            width={48}
            height={48}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M18.557 33.248L9.653 38.86l-6.048-8.468 8.694-6.14c.059-.042.059-.126 0-.16L3 17.944l5.964-8.56 9.097 5.36a.099.099 0 00.151-.085V3H29.88v11.987"
                stroke={props.strokePurple}
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
            <Path
                d="M29.88 14.978l8.988-5.594 6.132 8.3-8.954 5.972c-.06.042-.06.126 0 .16l8.702 6.224-6.048 8.643-8.92-5.611a.099.099 0 00-.152.084v11.743H18.557V33.25"
                stroke={props.strokeBlack}
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
        </Svg>
    );
}

export default FKIcon;