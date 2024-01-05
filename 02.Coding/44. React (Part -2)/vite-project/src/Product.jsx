import "./Product.css";

function Product({title, price = 40, features=[]}){
    
    return(
        <div className="Product">
        <h3>{title}</h3>
        <p>Price: {price}</p>
        <p>{features.map((feature) => (
        <li>{feature}
        </li>
    ))}</p>
        {price>30000 && <p>Discount of 5% is applicable</p>}
        </div>
    )
}

export default Product