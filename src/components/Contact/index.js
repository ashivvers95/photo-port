import React from "react";
import React, { useState } from "react";

const { name, email, message } = formState;

function ContactForm() {
    const [ formState, setFormState ] = useState({name: '', email: '', message:''});
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log(formState);
    }
 return(
     <section>
         <h1>Contact me</h1>
         <form id="contact-form" onSubmit={handleSubmit}>
             <div>
                 <label htmlFor="name" defaultValue={formState.name}/>
                 <input type="text" defaultValue={name} onChange={handleChange} name="name" />
             </div>
             <div>
                <label htmlFor="email"defaultValue={formState.name}/>
                <input type="email" defaultValue={email} onChange={handleChange} name="email" />
                </div>
            <div>
                <label htmlFor="message"defaultValue={formState.name}/>
                <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
            </div>
            <button type="submit">Submit</button>
         </form>
     </section>
 )
}

export default ContactForm;