"use client";
import { notFound } from "next/navigation";

export default function Review({
  params,
}: {
  params: {
    reviewId: string;
    productId: string;
  };
}) {

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
