import {configureStore} from "@reduxjs/toolkit";
import resumeSlice from "@/features/resumeSlice";
import themeSlice from "@/features/themeSlice";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from 'redux-persist'
import {combineReducers} from "redux";

const persistConfig = {
    key: 'root',
    storage,
}


const rootReducer = combineReducers({
    resume: resumeSlice,
    theme: themeSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch