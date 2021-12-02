import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function FISIPIcon(props: any) {
    return (
        <Svg
            width={48}
            height={48}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G
                clipPath="url(#prefix__clip0_721_625)"
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            >
                <Path
                    d="M19.784 36.669v-2.922c0-1.51-.555-2.97-1.567-4.096l-6.3-7.05a5.366 5.366 0 01-.88-5.81l2.464-5.41a2.805 2.805 0 013.753-1.372l4.92 2.326c.98.465 1.404 1.648.923 2.62-.514 1.036-1.38 2.08-2.766 1.852-2.636-.44-4.39-1.534-4.39-1.534"
                    stroke={props.strokeBlack}
                />
                <Path
                    d="M27.626 24.934v-2.962s-.76-4.12-5.508-5.68M16.659 9.732v-3.68c0-.628.302-1.224.848-1.673l.319-.253c.938-.767 2.464-.767 3.402 0 .718.58 1.118 1.371 1.118 2.195v5.606"
                    stroke={props.strokeBlack}
                />
                <Path
                    d="M22.134 5.301l.914-.963c.31-.326.718-.58 1.159-.66a2.832 2.832 0 012.04.424l.294.195a2.464 2.464 0 011.101 2.049v5.704a2.994 2.994 0 01-3.558 2.945l-.905-.171"
                    stroke={props.strokeBlack}
                />
                <Path
                    d="M27.626 5.032l.995-.4a2.776 2.776 0 012.587.27 3.167 3.167 0 011.412 2.635v5.557c0 .718-.457 1.363-1.134 1.6l-.474.163c-.571.204-1.2.18-1.762-.066l-1.632-.718M32.62 5.84l1.51-.44a2.402 2.402 0 012.072.358 3.557 3.557 0 011.469 2.88v15.415c0 1.15-.286 2.285-.832 3.305l-.637 1.183a9.02 9.02 0 00-1.06 4.227v3.892"
                    stroke={props.strokeBlack}
                />
                <Path
                    d="M32.62 14.285l1.436.498a3.324 3.324 0 002.179 0l1.436-.498"
                    stroke={props.strokeBlack}
                />
                <Path
                    clipRule="evenodd"
                    d="M18.307 36.57l18.727.205a.67.67 0 01.67.685l-.066 6.324a.67.67 0 01-.685.67l-18.728-.205a.67.67 0 01-.669-.685l.066-6.324a.681.681 0 01.685-.67z"
                    stroke={props.strokePurple}
                />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0_721_625">
                    <Path transform="translate(10 3)" d="M0 0h28.25v42H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
}

export default FISIPIcon;