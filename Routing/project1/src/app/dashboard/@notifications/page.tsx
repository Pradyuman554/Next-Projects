import Card from "@/components/Card";
import Link from "next/link";

export default function Notifications() {
    return (
        <>
            <Card>
            This is the Notifications page.
            <Link className="absolute font-normal text-base mr-5 right-0 text-white bg-black rounded-full p-1 hover:bg-blue-400 transition-normal duration-500" href="/dashboard/archived">Go to archived</Link>
            </Card>       
        </>
    );
}