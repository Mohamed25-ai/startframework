import contactCss from './contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Contact() {

    const [labelNameState,setLabeNamelState]=useState("opacity-0");
    const [labelAgeState,setLabelAgeState]=useState("opacity-0");
    const [labelEmailState,setLabelEmailState]=useState("opacity-0");
    const [labelPasswordState,setLabelPasswordState]=useState("opacity-0");
        function checkLabelName(e){
            if(e.target.value==""){
                setLabeNamelState('opacity-0');
            }
            else{
                setLabeNamelState('opacity-100');
            }
        };
        function checkLabelAge(e){
            if(e.target.value==""){
                setLabelAgeState('opacity-0');
            }
            else{
                setLabelAgeState('opacity-100');
            }
        };
        function checkLabelEmail(e){
            if(e.target.value==""){
                setLabelEmailState('opacity-0');
            }
            else{
                setLabelEmailState('opacity-100');
            }
        };
        function checkLabelPassword(e){
            if(e.target.value==""){
                setLabelPasswordState('opacity-0');
            }
            else{
                setLabelPasswordState('opacity-100');
            }
        };
    return (
        <>
            <section className='contact contact-section '>
                <header className=' contact-header mt-5 pt-5 text-center'>
                    <h2 className='mt-3'>CONTACT SECTION</h2>
                </header>
                <div className="text-icon mt-3" >
                    <div className={contactCss.starContactIcon + " text-center"}>
                        <FontAwesomeIcon icon={faStar} className='' />
                    </div>
                </div>
                <div className="container  d-flex justify-content-center my-5 ">
                    <div className="contact-form  ">
                        <label htmlFor="userName" className={ labelNameState+" label-animation form-label mt-3"}>userName:</label>
                        <input type="text" id="userName" className="form-control " onInput={checkLabelName} placeholder='userName' aria-describedby="passwordHelpBlock" />

                        <label htmlFor="userAge"  className={ labelAgeState+" label-animation form-label mt-3"}>userAge:</label>
                        <input type="text" id="userAge" className="form-control " onInput={checkLabelAge}  placeholder='userAge' aria-describedby="passwordHelpBlock" />


                        <label htmlFor="userEmail" className={ labelEmailState+" label-animation form-label mt-3"}>userEmail:</label>
                        <input type="email" id="userEmail" className="form-control "  onInput={checkLabelEmail} placeholder='userEmail' aria-describedby="passwordHelpBlock" />

                        <label htmlFor="userPassword" className={ labelPasswordState+" label-animation form-label mt-3"}>userPassword:</label>
                        <input type="text" id="userPassword" className="form-control "  onInput={checkLabelPassword} placeholder='userPassword' aria-describedby="passwordHelpBlock" />

                        <button className="p-2 rounded-2 submit-button my-4">send Message</button>
                    </div>

                </div>
            </section>
        </>
    )
}