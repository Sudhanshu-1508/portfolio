import React from 'react';
import './Contact.css';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { ImLocation2 } from 'react-icons/im';
import Toggle from '../Toggle/Toggle';

function Contact() {
  return (
    <>
   
      <h2 className='contact'>Contact</h2>
      
      <form className='contact-form'>
        <div className='form-group'>
          <input type='text' className='form-control' placeholder='Your Name' required></input>
        </div>
        <div className='form-group'>
          <input type='text' className='form-control' placeholder='Phone Number' required></input>
        </div>
        <div className='form-group'>
          <input type='email' className='form-control' placeholder='Email Address' required></input>
        </div>
        <div className='form-group'>
          <textarea className='form-control' placeholder='Message' required></textarea>
        </div>
        <button type='submit' onClick={()=>{alert('Sent Successfully!')}} className='btn btn-primary'>Submit</button>
      </form>

      <div className='contact-bottom'>
        <div><AiFillPhone />Phone: 9975955343</div>
        <div><AiOutlineMail />Email: sudhanshukulkarni55@gmail.com</div>
        <div><ImLocation2 />Location: Pune</div>
      </div>
    </>
  );
}

export default Contact;
