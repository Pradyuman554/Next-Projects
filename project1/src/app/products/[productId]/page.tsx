export default function Product({params} : {
    params : {productId : string};
}){
    return (
        <h1>This is product {params.productId}</h1>
    );
}