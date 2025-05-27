import { ReactNode } from "react";
import { Roboto, Rubik } from "next/font/google";
import "@/sass/index.scss";
import Nav from "@/components/ui/nav/Nav";
import "./Layout.scss";

type RootLayoutProps = {
    children: ReactNode;
};

const roboto = Roboto({
    subsets: ["latin"],
    weight: "variable",
});

const rubik = Rubik({
    subsets: ["latin"],
    weight: "variable",
});

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Next Axum Template</title>
            </head>

            <body className={`${roboto.className} ${rubik.className}`}>
                <div className="layout">
                    <Nav />
                    <div className="layout__content">{children}</div>
                </div>
            </body>
        </html>
    );
};

export default RootLayout;
