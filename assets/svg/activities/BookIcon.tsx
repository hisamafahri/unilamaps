import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function BookIcon(props: any) {
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
                    d="M8.324 12.392H5.277c-.339 0-.62.29-.62.638v25.712c0 .349.281.639.62.639h37.456c.338 0 .619-.29.619-.639V13.03a.634.634 0 00-.62-.638h-2.95"
                    stroke="#000"
                    strokeLinecap="round"
                />
                <Path
                    d="M11.584 9.064v7.516l2.119-2.118a.438.438 0 01.609 0l2.264 2.264V8.658"
                    stroke="#AC67DE"
                    strokeLinecap="round"
                />
                <Path
                    d="M24.111 9.906C17.37 7.506 10.713 9.2 8.914 9.75a.653.653 0 00-.474.638v24.948c0 .445.435.774.861.639 2.283-.726 8.677-2.37 14.162 0 .406.174.851.213 1.277.077 2.022-.667 8.513-2.476 14.133-.184a.662.662 0 00.91-.609V10.399a.665.665 0 00-.465-.638c-7.73-2.564-15.207.145-15.207.145zM24.111 9.906v26.37"
                    stroke="#000"
                />
                <Path
                    d="M27.671 15.303h9.296M27.671 18.873h9.296M27.671 22.443h9.296M27.748 26.002h4.644"
                    stroke="#AC67DE"
                    strokeLinecap="round"
                />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0_703_611">
                    <Path fill="#fff" transform="translate(4 8)" d="M0 0h40v32.029H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
}

export default BookIcon;