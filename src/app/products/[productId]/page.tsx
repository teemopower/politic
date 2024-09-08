export default function ProductDetails({ params } : { params: { productId: string}}){
    return <h1>Product ID {params.productId}</h1>
}