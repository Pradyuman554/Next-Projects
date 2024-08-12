"use client";
// import { useState } from "react";

export const ClientOne = ({children}:{children:React.ReactNode}) => {
    // const [input, setInput] = useState("Pradyuman");
    return (
        <div>Client Page 1
            <br/>
            {children}
        </div>
    );
}