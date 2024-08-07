import Card from "@/app/components/Card";
import Link from "next/link";

export default function Notifications() {
    return (
        <>
            <Card>
            This is the Notifications page.
            </Card>
            <Link className="flex justify-center" href="/dashboard/archived">Go to archived</Link>       
        </>
    );
}