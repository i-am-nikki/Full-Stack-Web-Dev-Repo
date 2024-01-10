export default function MsgBox({userName, textColor}){
    let styles = {color: textColor};
    return(
        <>
        <h2 style={styles}>Hello, {userName}</h2>
        </>
    )
}