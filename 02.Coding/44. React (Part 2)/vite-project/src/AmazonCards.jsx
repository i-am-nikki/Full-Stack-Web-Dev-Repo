import "./Product.css";
import AmazonPrice from "./AmazonPrice.jsx";

function AmazonCards({ title, idx }){
    let oldPrice =["49509", "1838", "455848", "583489"]
    let newPrice =["45000", "1700", "300000", "500000"]
    let description = [
    ["Mobile", "Samsung flagship phone"], 
    ["iPen", "Apple new stylus"], 
    ["Electronics", "Zebronics ultra new product"], 
    ["Mobile", "with dynamic island"]
]
    console.log(title);
    return(
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <AmazonPrice oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    )
}

export default AmazonCards;