'use client'
import "./globals.css";
import {Provider} from "react-redux";
import {persistor, store} from "@/store/store";
import LayoutBody from "@/components/LayoutBody";
import {PersistGate} from "redux-persist/integration/react";


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <LayoutBody>{children}</LayoutBody>
            </PersistGate>
        </Provider>
        </body>
        </html>
    );
}
