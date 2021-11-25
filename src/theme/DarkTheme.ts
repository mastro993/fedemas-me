import {DefaultTheme} from "styled-components";
import base from "./base";
import {Colors} from "./types";

const colors: Colors = {
    background: "#123456"
}

const DarkTheme: DefaultTheme = {
    ...base,
    isDark: true,
    colors,
}

export default DarkTheme