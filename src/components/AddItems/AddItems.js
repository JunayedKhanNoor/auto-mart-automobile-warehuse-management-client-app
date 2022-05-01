import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddItems = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data,e) => {
    console.log(data);
    const url = `http://localhost:5000/vehicle`;
    fetch(url,{
      method: "POST",
      headers:{
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(res=>res.json())
    .then(result=>{
      console.log(result);
      toast('Your item added to store');
    }) 
    e.target.reset();
  }; 
  return (
    <div>
      <h1 className="text-center my-4">Add Your Product to Store...</h1>
      <hr />
      <div style={{ maxWidth: "600px" ,borderRadius:"40px"}} className="mx-auto shadow-lg">
        <form
          className="d-flex flex-column p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="supplierName" className="text-primary mb-2 fs-4">Supplier Name:</label>
          <input
            style={{borderRadius:'15px',borderColor:'#27272a',borderWidth:'3px'}}
            className="mb-2 p-1"
            value={user?.displayName}
            {...register("supplierName", { required: true})}
          />
          <label htmlFor="email" className="text-primary mb-2 fs-4">Email:</label>
          <input style={{borderRadius:'15px',borderColor:'#27272a',borderWidth:'3px'}} className="mb-2 p-1" value={user?.email} {...register("email")} />
          <label htmlFor="name" className="text-primary mb-2 fs-4">Name of Vehicle:</label>
          <input style={{borderRadius:'15px',borderColor:'#27272a',borderWidth:'3px'}} className="mb-2 p-1" {...register("name", { required: true})} />
          <label htmlFor="img" className="text-primary mb-2 fs-4">Image URL:</label>
          <input style={{borderRadius:'15px',borderColor:'#27272a',borderWidth:'3px'}} className="mb-2 p-1" type="text"{...register("img", { required: true})} />
          <label htmlFor="description" className="text-primary mb-2 fs-4">Description:</label>
          <input style={{borderRadius:'15px',borderColor:'#27272a',borderWidth:'3px',height:'80px'}} className="mb-2 p-1" {...register("description", { required: true })} />
          <label htmlFor="price" className="text-primary mb-2 fs-4">Price:</label>
          <input style={{borderRadius:'15px',borderColor:'#27272a',borderWidth:'3px'}} className="mb-2 p-1" type="number" {...register("price", { required: true })} />
          <label htmlFor="quantity" className="text-primary mb-2 fs-4">Quantity:</label>
          <input style={{borderRadius:'15px',borderColor:'#27272a',borderWidth:'3px'}} className="mb-2 p-1" type="number" {...register("quantity", { required: true })} />
          <input style={{width:'200px'}} className="my-2 p-2 btn btn-primary mx-auto" type="submit" value="Add to Store"/>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
