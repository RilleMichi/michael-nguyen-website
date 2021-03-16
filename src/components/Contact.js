import React, { useState } from "react";
//https://www.emailjs.com/docs/examples/reactjs/ --> Für Email,dabei muss man Service und Template noch erstellen
import emailjs from "emailjs-com";
//https://react-hook-form.com/get-started#Quickstart
import { useForm } from "react-hook-form";


export const Contact = () => {

    //Für die Fehlerbehandlung im Contact oder das Reseten
    const { register, handleSubmit, errors } = useForm();
    const [successMessage, setSuccessMessage] = useState("");

    /* Hier werden die Email funktion erstellt mit den variablen von emailjs.com*/
    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_56wqZTWE1dPB2HDMlNjjh";

    //Für die Fehlerbehandlung im Contact oder das Reseten
    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset()
    }

    /* Hier werden die Email funktion erstellt mit den variablen von emailjs.com*/
    const sendEmail = (serviceID, templateID, variables, userID) => {

        //Try Catch 
        emailjs.send(serviceID, templateID, variables, userID)
            .then(() => {
                setSuccessMessage("Form sent succefully! I'll contact you as soon as possible.");
            }).catch(err => console.error(`Something went wrong ${err}`));
    }

    return (
        <div id="contact" className="contact">
            <div className="text-center">
                <h1>Contact Me</h1>
                <p>Please fill out the form and describe you project needs and I'll contact you as soon as possible</p>
                <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                {/* Aufruf Email funktion*/}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            {/* Name Input*/}
                            <div className="text-center">
                                <input
                                    tyoe="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                    ref={
                                        register({
                                            required: "Please enter your name!",
                                            maxLength: {
                                                value: 20,
                                                message: "Please enter a name fewer than 20 characters"
                                            }
                                        })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            {/*Error Message bei Fehlereinagbe Aufruf*/}
                            <span className="error-message">
                                {errors.name && errors.name.message}
                            </span>

                            {/* Phone Input*/}
                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Phone Number"
                                    name="phone"
                                    ref={
                                        register({
                                            required: "Please add your phone number",
                                        })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            {/*Error Message bei Fehlereinagbe Aufruf*/}
                            <span className="error-message">
                                {errors.phone && errors.phone.message}
                            </span>

                            {/* Mail Input*/}
                            <div className="text-center">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    ref={
                                        register({
                                            required: "Please provide you Email!",
                                            pattern: {
                                                value: /^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "invalid Email"
                                            }
                                        })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            {/*Error Message bei Fehlereinagbe Aufruf*/}
                            <span className="error-message">
                                {errors.email && errors.email.message}
                            </span>

                            {/* subject Input*/}
                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Subject"
                                    name="subject"
                                    ref={
                                        register({
                                            required: "You forget to add your Subject.",
                                        })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            {/*Error Message bei Fehlereinagbe Aufruf*/}
                            <span className="error-message">
                                {errors.subject && errors.subject.message}
                            </span>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            {/* Description Input*/}
                            <div className="text-center">
                                <textarea
                                    type="text"
                                    className="form-control"
                                    placeholder="Description"
                                    name="description"
                                    ref={
                                        register({
                                            required: "Please describe shortly your project need...",                                          
                                        })
                                    }
                                ></textarea>
                                <div className="line"></div>
                            </div>
                            {/*Error Message bei Fehlereinagbe Aufruf*/}
                            <span className="error-message">
                                {errors.description && errors.description.message}
                            </span>

                            <button className="btn-main-offer contact-btn" type="submit">Contact Me</button>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    )
}
export default Contact