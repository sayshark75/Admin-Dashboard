import "./globals.css";
import Provider from "../context/AutnContext";

export const metadata = {
    title: "Board",
    description: "A Elegant Dashboard to Maintain and View Statistics of Website",
    theme: "#000000",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}
