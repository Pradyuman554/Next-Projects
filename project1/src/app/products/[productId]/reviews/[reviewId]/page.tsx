import { notFound } from "next/navigation"

export default function Review({params}:
    {
        params : {
            reviewId : string
            productId : string
        };
    }
)
{   
    if (parseInt(params.reviewId) < 1000){
        notFound();
    }

    return (
        <h1>This is the review {params.reviewId} for product {params.productId}</h1>
    )
}