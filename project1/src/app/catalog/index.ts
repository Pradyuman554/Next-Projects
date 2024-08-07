import { StaticImageData } from "next/image";

import attire from "./photos/attire.webp";
import pajamas from "./photos/pajamas.jpg";
import trousers from "./photos/trousers.jpg";
import TShirt from "./photos/TShirt.jpg";
import TShirt2 from "./photos/TShirt2.jpg";

export type info = {
    id:string;
    name:string;
    color:string;
    src:StaticImageData;
};

const items : info[] = [
    {
        id: "1",
        name: "attire",
        color: "red",
        src:attire,
    },
    {
        id: "2",
        name: "pajamas",
        color: "black",
        src:pajamas,
    },
    {
        id: "3",
        name: "trousers",
        color: "pink",
        src:trousers,
    }
]