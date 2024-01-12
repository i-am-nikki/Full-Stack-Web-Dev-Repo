export default function AmazonPrice({oldPrice, newPrice}){
    let oldStyle={
        textDecorationLine : "line-through",
    };
    let newStyle={
        fontWeight: "bold"
    }
    let styles ={
        backgroundColor: "green",
        height: "30px",
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px",
    }
    return(
        <div style={styles}>
        <span style={oldStyle}>{oldPrice}</span>
        &nbsp; &nbsp;
        <span style={newStyle}>{newPrice}</span>
        </div>
    )
}