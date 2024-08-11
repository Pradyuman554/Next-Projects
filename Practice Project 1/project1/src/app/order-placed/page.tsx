"use client";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    const handleClick = () => {
        console.log("Order Placed");
        router.push("/");
        //router.replace("/")   //Replace the entire history
        //router.back();    //Navigate to the previous route in the history stack
    }
    
    return (
        <div>
            <h1>Press Button below to placed order</h1>
            <button onClick={handleClick}>Press Button</button>
        </div>
    );
}