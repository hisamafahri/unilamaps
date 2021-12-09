import * as React from "react";
import Svg, { Path } from "react-native-svg";

function GojekIcon(props: any) {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M14.408 12a2.408 2.408 0 11-4.816 0 2.408 2.408 0 014.816 0z"
                stroke="#00AA13"
                strokeWidth={1.25}
            />
            <Path
                clipRule="evenodd"
                d="M10.711 18.299h0a1.508 1.508 0 00-.813-1.798 4.967 4.967 0 114.24-.017 1.511 1.511 0 00-.778 1.866v.001c.147.423.436.73.849.902.412.172.834.161 1.238-.032a8 8 0 10-6.835.028c.415.195.85.197 1.268.008a1.47 1.47 0 00.831-.958v0z"
                stroke="#00AA13"
                strokeWidth={1.25}
            />
        </Svg>
    );
}

export default GojekIcon;