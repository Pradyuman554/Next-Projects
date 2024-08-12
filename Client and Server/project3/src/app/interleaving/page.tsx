import { ServerOne } from "@/components/serverone";

import { ClientOne } from "@/components/clientone";

export default function Interleaving() {
    return (
        <div>
            <div>Interleaving Page</div>
            <ClientOne>
            <ServerOne/>
                </ClientOne>
        </div>
    );
}