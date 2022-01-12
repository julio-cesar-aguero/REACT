import React from 'react';
import { useForm } from 'react-hook-form'

const EditUserForm = (props) => {
    
    const {register, handleSubmit,setValue} = useForm({defaultValues: props.currentUser});

    setValue('name', props.currentUser.name);
	setValue('username', props.currentUser.username);
    
	const onSubmit = (data, e) => {
		props.updateUser(props.currentUser.id,data)
        e.target.reset()
    };
	
	const onError = (errors, e) => console.log(errors, e);
  
    
    
    return (
        <form className="form__edit"onSubmit={handleSubmit(onSubmit, onError)}>
      <input {...register("name")} />
      <input {...register("username")} />
      <button type="submit">Submit</button>
    </form>
  );
        
}
 
export default EditUserForm;