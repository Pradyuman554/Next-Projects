import fs from 'fs';

export const ServerTwo = () => {
    fs.readFileSync("src/components/servertwo.tsx","utf-8");
    
    return (
        <div>
            Server Component 2
        </div>
    );
}