"use client";

import { useEffect, useState } from "react";

export const useCssVar = (
    cssVarName: string,
): [string | undefined, (newValue: string) => void] => {
    const [rootStyles, setRootStyles] = useState<CSSStyleDeclaration | null>(
        null,
    );
    const [cssVar, setCssVar] = useState<string>();

    useEffect(() => {
        const updateValue = () => {
            console.log("this ran!");
            const newRootStyles = getComputedStyle(document.documentElement);
            const value = newRootStyles.getPropertyValue(cssVarName).trim();

            setRootStyles(newRootStyles);
            setCssVar(value);
        };

        updateValue();

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (
                    mutation.type === "attributes" &&
                    (mutation.attributeName === "style" ||
                        mutation.attributeName === "class" ||
                        mutation.attributeName === "data-theme")
                ) {
                    updateValue();
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["style", "class", "data-theme"],
            subtree: false,
        });

        return () => observer.disconnect();
    }, [cssVarName]);

    const updateCssVar = (newValue: string | null) => {
        rootStyles?.setProperty(cssVarName, newValue);
        setCssVar(newValue ? newValue : undefined);
    };

    return [cssVar, updateCssVar];
};
