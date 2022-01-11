import React from 'react';
import { useForm } from 'react-hook-form'

const AddUserForm = (props) => {

    const {register, handleSubmit} = useForm();
    
    const onSubmit = (data, e) => {

        props.addUser(data);
        e.target.reset()
    };
    
    const onError = (errors, e) => console.log(errors, e);
  
    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
      <input {...register("name")} />
      <input {...register("username")} />
      <button type="submit">Submit</button>
    </form>
  );
        
}
 
export default AddUserForm;