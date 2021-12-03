import * as React from "react";
import Svg, { Path } from "react-native-svg";

function RainIcon(props: any) {
    return (
        <Svg
            width={320}
            height={320}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M163.805 86.366C155.283 68.437 136.646 56 115.027 56c-24.886 0-45.82 16.48-51.924 38.846C45.346 98.43 32 113.751 32 132.108c0 20.459 16.577 37.147 37.362 38.018"
                stroke="#3E1B72"
                strokeWidth={24}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M239.568 237.622h2.849c25.174 0 45.583-19.877 45.583-44.397 0-22.452-17.112-41.011-39.326-43.982-3.089-35.756-33.866-63.838-71.377-63.838-33.181 0-61.092 21.973-69.232 51.795-23.676 4.779-41.47 25.207-41.47 49.683 0 26.823 21.37 48.784 48.432 50.615"
                stroke="#000"
                strokeWidth={24}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M135.784 256.276l17.297-29.96m17.297 23.041l17.298-29.96m10.378 43.798l17.297-29.96"
                stroke="#3E1B72"
                strokeWidth={20}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

export default RainIcon;