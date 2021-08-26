import React,{useState} from 'react'
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";
import Modal from 'react-bootstrap/Modal'
function Contacts() {
    const { register, handleSubmit,formState: { errors } ,reset} = useForm();
    const [successMessage, setSuccessMessage] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmit = data => console.log(data);
    const serviceID='service_ID';
    const templateID='template_ID';
    const userID='user_kgjbdRcWoIbNW2BtnINzl';


    const onSubmitform = (data,r) => {
        sendEmail(
            serviceID,
            templateID,
            {
               name:data.name,
               phone:data.phone,
               email:data.email,
               subject:data.subject,
               description:data.description
            },
            userID
        )
       reset()
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
            handleShow();
          }).catch(err => setSuccessMessage(true));
      }

    return (
        <div id='contacts'  className='contacts py-4 '>
            <div className='text-center mb-5'>
            <h1>Contact me</h1>
            </div>
            <div className='container'>
                <form onSubmit={handleSubmit(onSubmitform)}>

               
                <div className='row'>
                    <div className='col-md-6 col-xs-12'>
                      <input
                    
                      type='text'
                      className='form-control'
                      placeholder='Name'
                      name='name'
                      {...register("name", { required: true, maxLength: 20 })}
                      />
                    {errors.name&&<p>Please enter Name</p>}
                      <input
                     
                      type='email'
                      className='form-control'
                      placeholder='Email'
                      name='email'
                      {...register("email", { required: true, maxLength: 20 })}
                      />
                      {errors.email&&<p>Please enter Email Address</p>}
                      <input
                      
                      type='number'
                      className='form-control'
                      placeholder='Phone number'
                      name='phone'
                      {...register("phone", { required: true, maxLength: 20 })}
                      />
                       {errors.phone&&<p>Please enter Phone Number</p>}
                      <input
                     
                      type='text'
                      className='form-control'
                      placeholder='Subject'
                      name='subject'
                      {...register("subject", { required: true, maxLength: 40 })}
                      />
                       {errors.subject&&<p>Please enter Subject</p>}
                    </div>
                    <div className='col-md-6 col-xs-12'>
                        <textarea
                        
                        type='textarea'
                        className='form-control'
                        placeholder='Description'
                        name='description'
                        {...register("description", { required: true, maxLength: 80 })}
                        >
                        </textarea>
                        {errors.description&&<p>Please enter Description</p>}
                        <button  className="btn btn-primary">Send</button>
                         {
                             successMessage?<p className='error'>There seems to a problem!</p>:null
                         }
                        
                    </div>

                </div>
                </form>
            </div>
            
            <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Message Sent</Modal.Title>
        </Modal.Header>
        <Modal.Body>I will contact you as soon as possible!</Modal.Body>
        <Modal.Footer>
        <button  className="btn btn-primary" onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default Contacts
