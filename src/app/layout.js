import {Montserrat} from "next/font/google";
import "./globals.css";
import Header from "@/shared/components/LayoutComponents/Header/Header";


const montserrat = Montserrat({subsets: ["latin"]});

export const metadata = {
    title: "AIHelperHub",
    description: "Generated by create next app",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={montserrat.className}>
        <Header/>
        {children}
        </body>
        </html>
    );
}
