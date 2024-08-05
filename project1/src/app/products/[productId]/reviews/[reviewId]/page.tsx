import { notFound } from "next/navigation";

export default function Review({
  params,
}: {
  params: {
    reviewId: string;
    productId: string;
  };
}) {
  if (parseInt(params.reviewId) < 1000) {
    notFound();
  }

  const number = 1;
  if (number === 1) {
    throw new Error("Dabba Gol");
  }

  return (
    <h1>
      This is the review {params.reviewId} for product {params.productId}
    </h1>
  );
}
