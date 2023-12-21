import { useState } from "react";


const User = ({users}) => {

    const {name,email,link} = users;

    const [user,setUser] = useState([])

    const handleDelete = _id => {
        console.log('delete id :' , _id)
        fetch(`http://localhost:5050/users/${_id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.deletedCount >0){
                alert('User deleted successfully')
                const remaining = user.filter(user => user._id !== _id);
                setUser(remaining)
            }
        })
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={link}className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p> {email} </p>
    <div className="mt-4">
        <button onClick={()=>handleDelete(users._id)} className="btn btn-warning">
            X
        </button>
    </div>
  </div>

</div>
    );
};

export default User;