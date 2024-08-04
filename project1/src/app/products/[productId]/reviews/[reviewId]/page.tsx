export default function Review({params}:
    {
        params : {
            reviewId : string
            productId : string
        }
    }
){
    return <>
        <h1>This is the review {params.reviewId} for product {params.productId}</h1>
    </>
}