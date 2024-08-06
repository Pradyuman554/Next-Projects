import Link from "next/link";

function getRandom(count:number){
    return Math.floor(Math.random() * count);
  }

export default function Products(){
    const random = getRandom(2);
    if(random==1) throw new Error("LMAO ye to one hai");

    return (
    <>
        <h1>Product List</h1>
        <Link href="/products/50/reviews/1">Skip to product 50.</Link>
    </>
    );
}
