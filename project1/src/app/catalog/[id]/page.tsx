import items, {info} from "../index";
import Image from "next/image";

export default function Page({params : {id},} : {
    params : {id : string};
}) {

    const photo : info = items.find((p)=>p.id===id)!;

    return (
        <div>
            <h1 className="font-black text-4xl">{photo.name}</h1>
            <Image
                alt={photo.name}
                src={photo.src}
            />
            <p>Color of the attire: {photo.color}</p>
        </div>
    );
}