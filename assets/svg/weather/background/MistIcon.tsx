import * as React from "react";
import Svg, { Path } from "react-native-svg";

function MistIcon(props: any) {
    return (
        <Svg
            width={320}
            height={320}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                opacity={0.8}
                d="M278.857 94.572H41.143a9.143 9.143 0 100 18.286h237.714a9.142 9.142 0 009.143-9.143 9.143 9.143 0 00-9.143-9.143z"
                fill="#3E1B72"
            />
            <Path
                d="M278.857 59H41.143a9.143 9.143 0 100 18.286h237.714A9.143 9.143 0 00288 68.143 9.143 9.143 0 00278.857 59z"
                fill="#231815"
            />
            <Path
                opacity={0.6}
                d="M278.857 132.143H41.143a9.143 9.143 0 000 18.286h237.714a9.143 9.143 0 000-18.286z"
                fill="#231815"
            />
            <Path
                opacity={0.4}
                d="M278.857 168.714H41.143a9.143 9.143 0 000 18.286h237.714a9.143 9.143 0 000-18.286z"
                fill="#3E1B72"
            />
            <Path
                opacity={0.2}
                d="M278.857 205.287H41.143a9.142 9.142 0 100 18.285h237.714a9.142 9.142 0 009.143-9.143 9.142 9.142 0 00-9.143-9.142z"
                fill="#231815"
            />
            <Path
                opacity={0.1}
                d="M278.857 241.858H41.143a9.143 9.143 0 000 18.286h237.714a9.143 9.143 0 000-18.286z"
                fill="#3E1B72"
            />
        </Svg>
    );
}

export default MistIcon;