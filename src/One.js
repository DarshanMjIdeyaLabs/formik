import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupForm2 =()=>{
    const formik = useFormik({
        initialValues:{
            Name:"",
            Mobile_NO:"",
            Email:""
        },

        validationSchema:Yup.object({
            Name:Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("required"),
            Mobile_NO:Yup.string()
            .max(10, "Mobile number should be 10 digits")
            .min(10, "Mobile Number should be 10 digits")
            .required("Required"),
            Email:Yup.string()
            .email('Invalid email address').required("Should not be empty!!!")
        }),
        onSubmit: values =>{
            alert(JSON.stringify(values,null,2));
        },
    });

    return(
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="Name">Name</label>
            <input 
            id="Name"
            name="Name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Name}
            /> 
            {formik.touched.Name && formik.errors.Name ? (<div>{formik.errors.Name}</div>):null}
            
            <br/>
            <label htmlFor="Mobile No">Mobile Number</label>
            <input 
            id="Mobile_NO"
            name="Mobile_NO"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Mobile_NO}
            />
            {formik.touched.Mobile_NO && formik.errors.Mobile_NO ? (<div>{formik.errors.Mobile_NO}</div>):null}
            
            <br/>
            <label htmlFor="Email">Email</label>
            <input 
            id="Email"
            name="Email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Email}
            />
            {formik.touched.Email && formik.errors.Email ? (<div>{formik.errors.Email}</div>):null}

            <br/>
            <button type="submit">Submit</button>
        </form>
    )

}
export default SignupForm2;