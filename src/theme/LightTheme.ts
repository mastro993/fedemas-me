import {DefaultTheme} from "styled-components";
import base from "./base";
import {Colors} from "./types";

const colors: Colors = {
    background: "#FFFFFF"
}

const LightTheme: DefaultTheme = {
    ...base,
    isDark: false,
    colors,
}

export default LightTheme