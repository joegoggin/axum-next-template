"use client";

import Icon from "@/components/ui/icon/Icon";
import { IconType } from "@/types/icon/Icon";
import "./Nav.scss";
import { useEffect, useState } from "react";
import { Colors } from "@/constants/color";

const Nav: React.FC = () => {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);

    useEffect(() => {
        if (isDarkTheme) {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }
    }, [isDarkTheme]);

    const toggleTheme = () => {
        setIsDarkTheme((prev) => !prev);
    };

    return (
        <div className="nav">
            <h4>Axum Next Template</h4>
            <div onClick={toggleTheme}>
                {isDarkTheme ? (
                    <Icon
                        type={IconType.IONICONS}
                        name="sunny"
                        size={30}
                        color={Colors.white}
                    />
                ) : (
                    <Icon type={IconType.IONICONS} name="moon" size={30} />
                )}
            </div>
        </div>
    );
};

export default Nav;
