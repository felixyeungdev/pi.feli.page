import React, { ReactNode } from "react";
import AppBar from "./AppBar";
import PageHead from "./PageHead";

interface Props {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <PageHead />
            <AppBar />
            {children}
        </>
    );
};

export default Layout;
