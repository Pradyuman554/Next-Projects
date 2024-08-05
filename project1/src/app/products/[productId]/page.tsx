import {Metadata} from "next";
import Link from "next/link";

function getRandomInt(count: number){
    return Math.floor(Math.random()*count);
}

type Props = {
    params:{
        productId:string;
    };
};

export const generateMetadata = ({params}:Props):Metadata => {

    return {
        title : `This is product ${params.productId}` ,
    };
};

export default function Product({params} : {
    params : {productId : string};
}){
    const random = getRandomInt(2);

    if(random===1){
        throw new Error("Random to One Nikla XD");
    }

    const link = `/products/${params.productId}/reviews/1`;

    return (
        <>  
            <h1>This is product {params.productId}</h1>
            <Link href={link} >Product review</Link>
        </>
        
    );
}