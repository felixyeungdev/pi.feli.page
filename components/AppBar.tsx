import React from "react";
import { AppBar as AppBarBase } from "@felipage/react-ui";
import { HiOutlineCalculator } from "react-icons/hi";
import { useRouter } from "next/router";

const AppBar = () => {
    const router = useRouter();

    const goHome = () => {
        router.push("/");
    };

    return (
        <AppBarBase
            title="Calculate Pi"
            Icon={HiOutlineCalculator}
            onTitleClick={goHome}
        />
    );
};

export default AppBar;
