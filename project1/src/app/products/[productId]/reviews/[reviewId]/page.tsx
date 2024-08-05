"use client";
import { notFound } from "next/navigation";


function getRandom(count:number){
  return Math.floor(Math.random() * count);
}

export default function Review({
  params,
}: {
  params: {
    reviewId: string;
    productId: string;
  };
}) {

  const random = getRandom(2);
  if(random==1) throw new Error("LMAO ye to one hai");

  //2 TYPES OF ERRORS:
  //1.
  // if (parseInt(params.reviewId) < 1000) {
  //   notFound();
  // }

  //2.
  

  return (
    <h1>
      This is the review {params.reviewId} for product {params.productId}
    </h1>
  );
}
