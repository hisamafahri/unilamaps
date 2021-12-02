import * as React from "react";
import Svg, { Path } from "react-native-svg";

function UniversityIcon(props: any) {
    return (
        <Svg
            width={48}
            height={48}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M24.118 11.93l.05-7.93 6.83.05-2.73 2.697 2.654 2.696-6.788-.227"
                stroke={props.strokePurple}
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
            <Path
                d="M16.877 21.942H4.73a.68.68 0 00-.638.454L3 25.538v19.311h42V25.832l-.764-3.36a.675.675 0 00-.664-.53h-12.6"
                stroke={props.strokeBlack}
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
            <Path
                d="M16.877 44.85V19.22l7.266-7.265 6.829 6.829v26.065M3 25.538h13.877M44.992 25.832h-14.02"
                stroke={props.strokeBlack}
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
            <Path
                d="M20.842 44.555v-10.5l2.746-2.747a.67.67 0 01.958 0l2.604 2.604v10.643"
                stroke={props.strokeBlack}
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
            <Path
                d="M23.992 26.764a2.881 2.881 0 100-5.762 2.881 2.881 0 000 5.762zM8.309 29.998H7.284v.958h1.025v-.958zM13.046 35.021h-1.024v.958h1.024v-.958zM8.309 35.021H7.284v.958h1.025v-.958z"
                stroke={props.strokePurple}
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
            <Path
                d="M13.046 35.021h-1.024v.958h1.024v-.958zM13.046 29.998h-1.024v.958h1.024v-.958zM13.046 40.145h-1.024v.958h1.024v-.958zM8.309 40.145H7.284v.958h1.025v-.958z"
                stroke={props.strokePurple}
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
            <Path
                d="M13.046 40.145h-1.024v.958h1.024v-.958zM36.13 29.948h-1.025v.957h1.025v-.957zM40.859 34.97h-1.025v.958h1.025v-.957zM36.13 34.97h-1.025v.958h1.025v-.957z"
                stroke={props.strokePurple}
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
            <Path
                d="M40.859 34.97h-1.025v.958h1.025v-.957zM40.859 29.948h-1.025v.957h1.025v-.957zM40.859 40.095h-1.025v.957h1.025v-.957zM36.13 40.095h-1.025v.957h1.025v-.957z"
                stroke={props.strokePurple}
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
            <Path
                d="M40.859 40.095h-1.025v.957h1.025v-.957z"
                stroke={props.strokePurple}
                strokeWidth={1.35}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
        </Svg>
    );
}

export default UniversityIcon;