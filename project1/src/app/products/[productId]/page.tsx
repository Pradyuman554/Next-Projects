import {Metadata} from "next";

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
    return (
        <h1>This is product {params.productId}</h1>
    );
}