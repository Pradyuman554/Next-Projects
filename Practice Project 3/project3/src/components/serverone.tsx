import fs from 'fs';

export const ServerOne = () => {
    fs.readFileSync("src/components/serverone.tsx","utf-8");
    
    return (
        <div>
            Server Component 1
        </div>
    );
}