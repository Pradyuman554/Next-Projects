export const Products = async() => {
    await new Promise((resolve)=>setTimeout(resolve, 4000));
    return <h1>This is the products page</h1>
}