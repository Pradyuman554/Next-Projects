// "use client";
import { useState } from "react";

export default function Dashboard() {
    // const [name, setName] = useState("");
    
    return (
        <div className="bg-white m-5">
            Dashboard Page
            {/* <input className="border border-black ml-2" value={name} onChange={(e)=>setName(e.target.value)}></input> */}
            {/* <p>Hello {name}</p> */}
            <h1>The time is {new Date().toLocaleTimeString()}</h1>
        </div>
    );
}