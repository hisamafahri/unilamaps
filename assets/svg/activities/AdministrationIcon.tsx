import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function AdministrationIcon(props: any) {
    return (
        <Svg
            width={48}
            height={48}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G
                clipPath="url(#prefix__clip0_703_611)"
                strokeWidth={1.35}
                strokeMiterlimit={10}
            >
                <Path
                    d="M12.126 8.658h4.991c.126 0 .252.048.339.135l1.732 1.451"
                    stroke="#000"
                />
                <Path
                    d="M14.564 18.892l2.989-8.338a.48.48 0 01.454-.32h23.381c.32 0 .552.31.455.62l-2.486 8.029"
                    stroke="#AC67DE"
                />
                <Path
                    d="M4.832 38.955l7.158-19.743a.482.482 0 01.445-.31h30.433a.48.48 0 01.455.629l-6.21 19.221a.489.489 0 01-.455.329H5.132a.475.475 0 01-.474-.474V9.132c0-.261.213-.474.474-.474h6.994"
                    stroke="#000"
                />
                <Path
                    d="M30.041 22.056l-1.49 3.985a.482.482 0 00.445.648h6.55A.48.48 0 0036 26.37l1.383-3.986a.483.483 0 00-.454-.638h-6.443a.447.447 0 00-.445.31z"
                    stroke="#AC67DE"
                />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0_703_611">
                    <Path fill="#fff" transform="translate(4 8)" d="M0 0h40v31.72H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
}

export default AdministrationIcon;