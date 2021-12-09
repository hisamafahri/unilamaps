import * as React from "react";
import Svg, { Path } from "react-native-svg";

function DanaIcon(props: any) {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                clipRule="evenodd"
                d="M4.102 8.437c-.174.502-.072 6.103-.072 7.144 0 1.12-.219 1.476 1.534 2.073 4.656 1.593 9.268-3.805 13.894-1.135.211.124.473.378.539-.03v-7.2c0-.772.072-1.019-.444-1.375-4.14-2.888-8.628 2.044-12.825 1.49-1.556-.203-2.204-.996-2.626-.967z"
                stroke="#108EE9"
                strokeWidth={1.25}
                strokeMiterlimit={10}
            />
        </Svg>
    );
}

export default DanaIcon;