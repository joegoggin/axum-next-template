import { ReactNode } from "react";
import "@/sass/index.scss";

type RootLayoutProps = {
    children: ReactNode;
};

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

            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
