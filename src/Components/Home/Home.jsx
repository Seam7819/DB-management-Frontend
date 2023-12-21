import {  useLoaderData } from "react-router-dom";
import User from "../User/User";

const Home = () => {

    const users = useLoaderData()
    console.log(users)

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const link = form.link.value;
        const users = {name,email,link}
        console.log(users);
        fetch('http://localhost:5050/users', {
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(users)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            form.reset()
            if(data.insertedId)
            {
                alert('Data added Successfully')
            }
        })
    }

    return (
        <div>
            <h2 className="text-4xl mb-5 font-bold">Database Management System</h2>
            <h2 className="text-2xl font-bold mb-5">Please Input your information here</h2>
            <form onSubmit={handleSubmit} className="border rounded-lg mt-10 shadow-md p-10 w-96 h-96 mx-auto">
                <h2 className="font-bold mb-3">Input Info</h2>
                <input placeholder="name" className="border rounded-md shadow-md p-2 mb-4" type="text" name="name" id="" />
                <br />
                <input placeholder="email" className="border rounded-md shadow-md p-2 mb-4" type="email" name="email" id="" />
                <br />
                <input placeholder="img url" className="border rounded-md shadow-md p-2 mb-4" type="url" name="link" id="" />
                <br />
                <input  className="border rounded-md p-2 bg-amber-300 cursor-pointer" type="submit" value="Submit" />
            </form>
            <h2 className="text-2xl font-bold mt-10">Users Information</h2>
            <div className="grid grid-cols-3 gap-5">
                {
                    users.map(user => <User users = {user} key={user._id}></User>)
                }
            </div>
        </div>
    );
};

export default Home;