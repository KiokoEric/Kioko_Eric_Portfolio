import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import "../Contact/Contact.css";
import World from "../../Images/World_Image.jpg";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";

const Contact = () => {

    const [Success, setSuccess] = useState("")

    const formRef = useRef();

    const PersonSchema = yup.object().shape({
        Name: yup.string().required("Name is required"),
        EmailAddress: yup.string().email("Email format is not valid").required("Valid email address is required"),
        PhoneNumber: yup.string(),
        Message: yup.string().required("Message is required")
    });

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver : yupResolver(PersonSchema)
    });


    const onSubmit = () => {
        emailjs.sendForm('service_p1q43qr', 'template_fa10n1a', formRef.current, 'PnplNSesRddqlO1I1')
        setSuccess("Message successfully sent.")
    }

return (
    <div id='Contact' className='Contact' >
        <h2>Contact Me</h2>
        <article>
            <section>
                <h2>Get In Touch</h2>
                <form ref={formRef} onSubmit={handleSubmit(onSubmit)} >
                    <div>
                        <input type="text" name="Name" id="Name" placeholder='Enter Full Name/Organisation'  
                        {...register("Name")}/>
                        <span className="Error">{errors.Name?.message}</span>
                    </div>
                    <div>
                        <input type="text" name="EmailAddress" id="EmailAddress" placeholder='Enter Email Address' {...register("EmailAddress")}  />
                        <span className="Error">{errors.EmailAddress?.message}</span>
                    </div>
                    <div>
                        <input type="text" name="PhoneNumber" id="PhoneNumber" placeholder='Enter Phone Number'  
                        {...register("PhoneNumber")} />
                    </div>
                    <textarea type="text" placeholder='Enter Message' name="Message" id="Message" cols="20" rows="10" {...register("Message")} ></textarea>
                    <span className="Error">{errors.Message?.message}</span>
                    <p className='Success' >{Success}</p>
                </form>
                <button onClick={handleSubmit(onSubmit)}  type="submit">Send Message</button>
            </section>
            <section> 
                <figure>
                    <img src={World} alt="" />
                </figure>
            </section>
            <section>
                <figure>
                    <BsFillTelephoneOutboundFill size="1.65rem" className='Phone' />
                    <p>
                        +254 711 621 939
                    </p>
                </figure>
                <figure>
                    < AiTwotoneMail size="2rem" />
                    <p>
                        kiokoerick040@gmail.com 
                    </p>
                </figure>
            </section>
        </article> 
    </div>
)
}

export default Contact 