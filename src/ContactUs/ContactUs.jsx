import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useTranslation } from 'react-i18next';
export default function ContactUs() {

  const [SubmitFormLoading,SetSubmitFormLoading]= useState(false);
  const { t }                                                                             = useTranslation();

  let formValues = {} ;
  let initialvalues ={
    name                                                                                  : "",
    phone                                                                                  : "",
    country                                                                                  : "",
    service                                                                                  : "",
    // adminMail:"in.mktg.ag@gmail.com"
  }
  let validationSchema = Yup.object({
    name                                                                                     : Yup.string().required(`${t("name required")}`).min(6,`${t("please write at least two names")}`).max(35,`${t("maximum 35 charcters")}`),
    country                                                                                     : Yup.string().required(`${t("country required")}`).min(3,`${t("minimum 3 charcters")}`).max(35,`${t("maximum 35 charcters")}`),
    // website                                                                                     : Yup.string().optional("country is required , hint: min 3 charcters, maximum 15 charcters").min(10,"min 10 charcters").max(35,"maximum 35 charcters"),
    phone                                                                                     : Yup.string().required(`${t("phone required")}`).min(10,`${t("minimum 10 charcters")}`).max(35,`${t("maximum 35 charcters")}`),
    // email                                                                                     : Yup.string().optional("email is required , hint: min 3 charcters, maximum 15 charcters").min(10,"min 10 charcters").max(35,"maximum 35 charcters"),
    // subject                                                                                     : Yup.string().optional("subject is required , hint: min 3 charcters, maximum 15 charcters").min(10,"min 10 charcters").max(35,"maximum 35 charcters"),
    service                                                                                     : Yup.string().required(`${t("kindly select")}`)
  })

  let formik = useFormik({
    enableReinitialize                                                                       : true,
    validateOnChange:false,
    initialValues:{ 
     ...initialvalues
    },
    validationSchema,
    onSubmit                                                                                 : (values)=>
  {
    SetSubmitFormLoading(true)
    console.log(values);

    //  setIsValues(values);   
    formValues={...values};
     sendFormDataToServer(formValues);
    // SetSubmitFormLoading(false)

  },
 })

 const sendFormDataToServer = async (formData) => {
  try {
    // adminMail:"in.mktg.ag@gmail.com"
    formData.adminMail="clinic.insideout@gmail.com";
    const response = await fetch('https://mail-service-zr73.onrender.com/insideout/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log('Email sent successfully');
      // Optionally, you can reset the form here
      formik.resetForm()
      toast.success(`${t("sent successfully")}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        // transition: Bounce,
        });
    } else {
      console.error('Failed to send email');
    }
    
  } catch (error) {
    console.error('Error sending email:', error);
  }
  SetSubmitFormLoading(false)
};
  return (
    <>

    <div className='bg-custom-green mb-4 flex flex-wrap justify-center items-center pt-16'>
    
      <div className=" md:text-start w-5/6 mx-auto ">

      <form onSubmit                                                                      = {formik.handleSubmit} onReset={formik.handleReset} {...initialvalues} className='flex flex-wrap  justify-evenly md:justify-evenly items-center mx-auto'>
      <div className                                                                            = "form-group mb-2 p-2 w-full   md:w-1/2">
        {/* <label htmlFor                                                                              = "name" className={`fw-semibold text-uppercase `}>Name *</label> */}
        <input type                                                                                 = "text" className={`form-control form-control-sm p-2 w-full   bg-transparent border placeholder-custom-gold text-custom-gold border-custom-gold  rounded-lg`}  id='name' name='name' placeholder={t("name")} value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      {formik.errors.name && formik.touched.name?<p className                                   = 'p-2   text-sm text-white rounded-lg      ' role="alert"> {formik.errors.name} </p>:<p className                                   = 'p-2   text-sm text-white rounded-lg      ' role="alert">  </p> }
      </div>
     
      <div className                                                                            = "form-group mb-2 p-2 w-full  md:w-1/2">
        {/* <label htmlFor                                                                              = "name" className={`fw-semibold text-uppercase `}>Name *</label> */}
        <input type                                                                                 = "text" className={`form-control form-control-sm w-full p-2 bg-transparent border placeholder-custom-gold text-custom-gold border-custom-gold  rounded-lg`}  id='country' name='country' placeholder={t("country")} value={formik.values.country} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      {formik.errors.country && formik.touched.country?<div className                                   = 'p-2  text-sm text-white rounded-lg   ' role="alert">{formik.errors.country}</div>:<p className                                   = 'p-2   text-sm text-white rounded-lg      ' role="alert">  </p> }
      </div>

      
     
      <div className                                                                            = "form-group mb-2 p-2 w-full md:w-1/2">
        {/* <label htmlFor                                                                              = "name" className={`fw-semibold text-uppercase `}>Name *</label> */}
        <input type                                                                                 = "text" className={`form-control form-control-sm w-full   p-2 bg-transparent border placeholder-custom-gold text-custom-gold border-custom-gold  rounded-lg`}  id='phone' name='phone' placeholder={t("phone")} value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.errors.phone && formik.touched.phone?<div className                                   = 'p-2  text-sm text-white rounded-lg   ' role="alert">{formik.errors.phone}</div>:<p className                                   = 'p-2   text-sm text-white rounded-lg      ' role="alert">  </p> }
      
      </div>
      
     

      <div className                                                                            = "form-group mb-2 p-2 w-full md:w-1/2">
        {/* <label htmlFor                                                                              = "name" className={`fw-semibold text-uppercase `}>Name *</label> */}
        
        <select  className={`form-control form-control-sm p-2 w-full bg-transparent border placeholder-custom-gold text-custom-gold border-custom-gold custom-select rounded-lg`}  id='service' name='service' placeholder='الخدمه' value={formik.values.service} onChange={formik.handleChange} onBlur={formik.handleBlur}> 
        <option  value={t("body contouring")} >{t("body contouring")}</option>
        <option value={t("Breast augmentation / reduction")}>{t("Breast augmentation / reduction")}</option>
        <option value={t("Brazilian butt lift")}> {t("Brazilian butt lift")}</option>
        <option value={t("gynecomastia")}> {t("gynecomastia")}</option>
        <option value={t("Brachioplasty")}>{t("Brachioplasty")}</option>
        <option value={t("Facial aesthetics")}>{t("Facial aesthetics")}</option>
        <option value={t("Abdominal contouring and definition")}>{t("Abdominal contouring and definition")}</option>
        <option value={t("other")}> {t("other")}</option>
        </select>
        {formik.errors.service && formik.touched.service?<div className                                   = 'p-2  text-sm text-white rounded-lg   ' role="alert">{formik.errors.service}</div>:<p className                                   = 'p-2   text-sm text-white rounded-lg      ' role="alert">  </p> }
      
      </div>

     
      

      {SubmitFormLoading ? <div className='loader mx-auto'></div>:<button type                                                                    = "submit" disabled={!formik.isValid && formik.dirty } className=' mb-2 mx-auto md:mx-0 rounded-2xl p-2 px-3  md:me-8 md:w-1/3 bg-custom-gold text-white hover:bg-white border hover:border-custom-gold hover:text-custom-gold' > {t("send")}</button>}

      </form>
      </div>
      
      </div>
      <ToastContainer></ToastContainer>
    </>
  )
}
