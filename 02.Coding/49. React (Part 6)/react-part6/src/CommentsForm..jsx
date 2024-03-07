import { useState } from "react"

export default function CommentsForm() {
    let [formData, setFormData] = useState({
        username: "",
        remark: "",
        rating: 5
    })

    let handleInputChange = (event) =>{
        setFormData((currData) =>{
            return { ...currData, [event.target.name]: event.target.value };
        })
    }

    let handleSubmit = (event) =>{
        console.log(formData);
        event.preventDefault();
        setFormData({
            username: "",
            remark: "",
            rating: 5
        })
    }

    return(
        <div>
            <h4>Give a comment! </h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username </label>
                <input placeholder="username" id="username" name="username" type="text" value={formData.username} onChange={handleInputChange}/>
                <br/><br/>

                <label htmlFor="remark">Remarks </label>
                <textarea placeholder="write your remark here!!" id="remark" name="remark" value={formData.remark} onChange={handleInputChange}></textarea>
                <br/><br/>

                <label htmlFor="rating">Rating </label>
                <input placeholder="rating" id="rating" name="rating" type="number" min={1} max={5} value={formData.rating} onChange={handleInputChange}/>
                <br/><br/>

                <button>Add Comment</button>
            </form>
        </div>
    )
}