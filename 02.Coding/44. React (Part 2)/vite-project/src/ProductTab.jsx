import Product from "./Product.jsx"

function ProductTab(){
    let options= ["50MP Camera", "Snapdragon Processor"]
    return(
        <>
        <Product title="Mobile" price={30000} features={options} />
        <Product title="Laptop" price={50000}/>
        <Product title="Tablet" />
        </>
    )
}

export default ProductTab;