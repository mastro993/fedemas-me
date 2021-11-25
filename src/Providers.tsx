import {ThemeProvider} from 'styled-components'
import React from "react";
import {useThemeManager} from "./state/user/hooks";
import {Provider} from "react-redux";
import store from "./state";
import {DarkTheme, LightTheme} from "./theme";

const ThemeProviderWrapper: React.FC = (props) => {
    const {isDark} = useThemeManager()
    return <ThemeProvider theme={isDark ? DarkTheme : LightTheme} {...props} />
}

const Providers: React.FC = ({children}) => {
    return (
        <Provider store={store}>
            <ThemeProviderWrapper>
                {children}
            </ThemeProviderWrapper>
        </Provider>
    )
}

export default Providers