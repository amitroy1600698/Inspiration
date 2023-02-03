import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';


const Result=()=>{
    swal({
        title: "Thank you!",
        text: "Your response has been received!",
        icon: "success",
        button: "Click Okay!",
      });
};
function Contact() {
    const [result,showResult] =useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_az3v95v', 'template_umelmsp', e.target, 'jj3JTjE29uB9eH_z7')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true);
      };

      setTimeout(()=>{
        showResult(false)
       },2000);

  return <div className='contact'>
    
    <main>
        <h1>Contact Us</h1>
        <form action='' onSubmit={sendEmail}>
            <div>
                <label>Name</label>
                <input type="text" required placeholder='Enter your name' />
            </div>
            <div>
                <label>Email</label>
                <input type="email" required placeholder='Enter your email' />
            </div>
            <div>
                <label>Messege</label>
                <input type="text" required placeholder='Tell us about your query...' />
            </div>
            <button className="submit">Send</button>
            <div className='result'>{result ? <Result /> : null}</div>
        </form>
    </main>
  </div>
};

export default Contact