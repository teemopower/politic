export default function Review( {params} : {
    params: {
        productId: string,
        reviewId: string
    }
}){
    return (
        <>
         <h1>Review Details {params.reviewId}</h1>
        </>
        
    )
}