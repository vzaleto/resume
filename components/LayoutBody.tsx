'use client'
import {ReactNode} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {toggleDarkMode} from "@/features/themeSlice";

const LayoutBody = ({children}: { children: ReactNode }) => {
    const darkMode = useSelector((state: RootState) => state.theme.darkMode)
    const dispatch = useDispatch()
    return (
        <div className={`${darkMode ? 'dark min-h-screen' : 'min-h-screen'} layout-body`}>
            <button className={' top-4 left-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded'} onClick={() => dispatch(toggleDarkMode())}>
                {darkMode ? 'light' : 'dark'}
            </button>
            {children}
        </div>
    );
};

export default LayoutBody;