import { createContext } from "react";
import { useContext } from "react";

export const OneFileContext = createContext({
        themeMode: "light",
        darkTheme:() => {},
        lightTheme: () => {},

})


export const ThemeProvider=OneFileContext.Provider

export default function useTheme(){
    return useContext(OneFileContext)
}
