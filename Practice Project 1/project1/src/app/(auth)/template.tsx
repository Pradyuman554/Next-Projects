import { ReactNode } from "react";

export default function Page({children}:{
    children : ReactNode
}) {
    return (
        <div>
            {children}
            <h1>Sasrikal</h1>
        </div>
    );
}