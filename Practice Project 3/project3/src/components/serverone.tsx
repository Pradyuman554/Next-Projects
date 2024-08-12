import fs from 'fs';
import { ClientTwo } from './clienttwo';
import { ServerTwo } from './servertwo';

export const ServerOne = () => {
    fs.readFileSync("src/components/serverone.tsx","utf-8");
    
    return (
        <div>
            Server Component 1
            <br/>
            <ClientTwo/>
            <ServerTwo/>
        </div>
    );
}