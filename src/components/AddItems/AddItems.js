import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";

const AddItems = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <h1>Add Items</h1>
      <div style={{ maxWidth: "600px" ,borderRadius:"40px"}} className="mx-auto shadow-lg">
        <form
          className="d-flex flex-column p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            style={{borderRadius:'15px',borderColor:'#27272a',borderWidth:'3px'}}
            className="mb-2 p-1"
            value={user?.displayName}
            {...register("supplierName", { required: true, maxLength: 20 })}
          />
          <input style={{borderRadius:'15px',borderColor:'#27272a',borderWidth:'3px'}} className="mb-2 p-1" value={user?.email} {...register("email")} />
          <input style={{borderRadius:'15px',borderColor:'#27272a',borderWidth:'3px'}} className="mb-2 p-1" {...register("name", { required: true, maxLength: 20 })} />
          <input style={{borderRadius:'15px',borderColor:'#27272a',borderWidth:'3px',height:'80px'}} className="mb-2 p-1" {...register("description", { required: true })} />
          <input style={{borderRadius:'15px',borderColor:'#27272a',borderWidth:'3px'}} className="mb-2 p-1" type="number" {...register("price")} />
          <input style={{borderRadius:'15px',borderColor:'#27272a',borderWidth:'3px'}} className="mb-2 p-1" type="number" {...register("quantity")} />
          <input style={{borderRadius:'15px',borderColor:'#27272a',borderWidth:'3px'}} className="mb-2 p-1" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
