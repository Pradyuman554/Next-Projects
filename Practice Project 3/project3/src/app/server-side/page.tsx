import { ServerSideUtils } from "@/utils/server-utils";

export default function ServerRoutePage() {
    const result = ServerSideUtils();
    return (
        <div>
            ServerRoutePage
            <p>{result}</p>    
        </div>
    );
}