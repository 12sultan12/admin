import {createContext, useReducer} from "react"
import DarkModeReduce from "./darkModeReduce";

const INITIAL_STATE = {
    darkMode: true,
}
export const DarkModeContext = createContext(INITIAL_STATE)

export const DarkModeContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(DarkModeReduce, INITIAL_STATE)
    return <DarkModeContext.Provider value={{darkMode: state.darkMode}, dispatch}>{children }</DarkModeContext.Provider>
}