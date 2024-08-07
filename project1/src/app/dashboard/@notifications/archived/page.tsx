import Card from "@/app/components/Card";
import Link from "next/link";

export default function ArchivedPage() {
    return (
        <>
        <Card>
            This is the Archived page.
        </Card>
        <br/>
        <Link href="/dashboard">Go back</Link>
        </>
    );
}
