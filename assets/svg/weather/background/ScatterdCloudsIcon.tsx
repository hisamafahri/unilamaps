import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ScatteredCloudsIcon(props: any) {
    return (
        <Svg
            width={320}
            height={320}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M69.362 183.126C48.577 182.255 32 165.567 32 145.108c0-18.357 13.346-33.678 31.103-37.262C69.207 85.48 90.14 69 115.027 69c21.789 0 40.548 12.633 48.977 30.79"
                stroke="#3E1B72"
                strokeWidth={24}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M118.69 250.622c-28.772 0-52.096-22.717-52.096-50.739 0-24.476 17.795-44.904 41.471-49.683 8.14-29.822 36.051-51.795 69.232-51.795 37.511 0 68.288 28.082 71.377 63.838 22.214 2.971 39.326 21.53 39.326 43.982 0 24.52-20.409 44.397-45.583 44.397H118.69z"
                stroke="#000"
                strokeWidth={24}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

export default ScatteredCloudsIcon;