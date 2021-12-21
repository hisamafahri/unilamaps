import * as React from "react";
import Svg, { Circle } from "react-native-svg";

function MapMarker(props: any) {
    return (
        <Svg
            width={48}
            height={48}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={24} cy={24} r={24} fill={props.colorRing} fillOpacity={0.2} />
            <Circle cx={23.52} cy={24.48} r={10.08} fill={props.colorRing} />
            <Circle cx={23.52} cy={24.48} r={7.2} fill={props.colorCenter} />
        </Svg>
    );
}

export default MapMarker;