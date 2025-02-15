import Footer from "@/components/share/Footer";
import Navbar from "@/components/share/Navbar";
import React from "react";


const CommonLayout = ({ children }: Readonly<{ children:React.ReactNode}>) => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen">
                {children}
            </div>
           
            <Footer></Footer>
        </div>
    );
};

export default CommonLayout;