import { useState } from "react"

export default function Form(){

    //State var
    let [formData, setFormData] = useState({
        fullName : "",
        username : "",
        password : "",
    });

    // let handleNameChange = (event) =>{
    //     setFullName(event.target.value);
    // };

    // let handleUsername = (event) =>{
    //     setUsername(event.target.value);
    // };

    let handleInputChange = (event) => { 
           setFormData((currData) => {
            return{...currData, [event.target.name] : event.target.value};
           })
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName : "",
            username : "",
            password : "",
        });
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label> &nbsp;
            <input placeholder="Enter your full name" 
            type="text" 
            value={formData.fullName}
            // onChange={handleNameChange}
            onChange={handleInputChange}
            id="fullName"
            name="fullName"
            /> &nbsp;
<br/><br/>
            <label htmlFor="username">UserName</label> &nbsp;
            <input placeholder="Enter your username" 
            type="text" 
            value={formData.username}
            // onChange={handleUsername}
            onChange={handleInputChange}
            id="username"
            name = "username"
            /> &nbsp;

<br/><br/>
            <label htmlFor="password">Password</label> &nbsp;
            <input placeholder="Enter your password" 
            type="password" 
            value={formData.password}
            // onChange={handleUsername}
            onChange={handleInputChange}
            id="password"
            name = "password"
            /> &nbsp;

            <button>Submit</button>
        </form>

    )
}