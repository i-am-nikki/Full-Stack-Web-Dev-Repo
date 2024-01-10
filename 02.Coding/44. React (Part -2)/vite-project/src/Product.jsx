import "./Product.css";

function Product({title, price = 40, features=[]}){
    let styles = {backgroundColor: price>30000 ? "maroon": null};
    return(
        <div className="Product" style={styles}>
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