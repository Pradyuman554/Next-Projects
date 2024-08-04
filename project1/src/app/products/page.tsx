import Link from "next/link";

export default function Products(){
    const productId = 50;
    return (
    <>
        <h1>Product List</h1>
        <Link href={`/products/${productId}`} replace>Product {productId}</Link>
    </>
    );
}
