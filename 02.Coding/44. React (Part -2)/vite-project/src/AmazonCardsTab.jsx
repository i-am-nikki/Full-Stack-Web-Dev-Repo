import AmazonCards from "./AmazonCards.jsx";

function AmazonCardsTab(){
    let styles = {
        display:"flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
    }
    return(
        <div style={styles}>
        <AmazonCards title="Samsung Galaxy S23 Ultra" idx={0}/>
        <AmazonCards title="Apple Pencil 2nd Gen" idx={1}/>
        <AmazonCards title="Zebronics Zeb-Transformer" idx={2}/>
        <AmazonCards title="iPhone 15 Pro Max" idx={3}/>
        </div>
    );
}

export default AmazonCardsTab;