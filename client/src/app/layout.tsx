import { ReactNode } from "react";
import { Roboto, Rubik } from "next/font/google";
import "@/sass/index.scss";

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
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
