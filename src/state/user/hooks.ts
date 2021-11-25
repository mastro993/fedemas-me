import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppState} from "../index";
import {useCallback} from "react";
import {toggleTheme as toggleThemeAction} from "./index";

export const useThemeManager = () => {

    const dispatch = useDispatch<AppDispatch>()
    const isDark = useSelector<AppState, boolean>((state) => state.user.isDark)

    const toggleTheme = useCallback(() => {
        dispatch(toggleThemeAction())
    }, [dispatch])

    return {isDark, toggleTheme}
}