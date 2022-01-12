import React from 'react'
import {useFormik} from 'formik'

const validate = values =>{
  const errors={};
  if(!values.username){
    errors.username="Required";
  }else if(values.username.length > 15){
    errors.username="User Name Should be less than or equal to 15 characters"
  }

  if(!values.email){
    errors.email="Required"
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email="Invalid Email Address";
  }

  if(!values.password){
    errors.password="Required"
  }else if(!/^[A-Z0-9._%+-]/i.test(values.password)){
    errors.password="Password should be Number!!!"
  }else if(values.password.length>9){
    errors.password="Password should not be more than 9 characters"
  }

  return errors;
}

const SignupForm =()=>{
  const formik = useFormik({
    initialValues:{
      username:'',
      email:'',
      password:''
    },validate,
    onSubmit : values =>{
      alert(JSON.stringify(values,null,2));
    },
  });

  

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="username">User Name</label>
      <input 
      id="username"
      name="username"
      type="text"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.username}
      /><br/>
      {formik.touched.username && formik.errors.username ? <div>{formik.errors.username}</div>:null}<br/>
      <label htmlFor="email">Email</label>
      <input 
      id='email'
      name='email'
      type="email"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.email}
      /><br/>
      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div>:null}<br/>
      <label htmlFor="password">Password</label>
      <input 
      id="password"
      name="password"
      type="password"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.password}
      /><br/>
      {formik.touched.password && formik.errors.password ? (<div>{formik.errors.password}</div>):null}

      <button type="submit">Submit</button>
    </form>
  )



}
export default SignupForm;