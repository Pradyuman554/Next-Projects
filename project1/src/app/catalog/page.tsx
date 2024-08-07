import photos from "./index";
import Image from "next/image";
import Link from "next/link";

export default function Catalog() {
    return (
        <div>
            <h1 className="flex justify-center text-4xl font-black mt-5 underline underline-offset-1">Catalog</h1>
            {
                photos.map((photo)=>(
                    <div>
                        <Link key={photo.id} href={`/catalog/photos/${photo.name}`}>Link to photo
                        <Image
                            alt={photo.name}
                            src={photo.src}
                            className = "w-full object-cover"
                        />
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}