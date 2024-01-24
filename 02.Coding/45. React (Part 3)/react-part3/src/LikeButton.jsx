import { useState } from "react"

export default function LikeButton(){
    let [isLiked, setIsLiked] = useState(false);

    let toggleLike = () =>{
        setIsLiked(!isLiked);
    }

    let likeStyle = {color:"#5a6eb8"};

    return(
        <div>
            <p onClick={toggleLike}>
                {isLiked ? <i className="fa-solid fa-thumbs-up" style={likeStyle}></i>
                : <i className="fa-regular fa-thumbs-up"></i>}
            </p>
        </div>
    )
}