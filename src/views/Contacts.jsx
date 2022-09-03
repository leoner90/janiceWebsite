import './css/Contacts.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope,faMapLocationDot,faAddressCard,faTriangleExclamation,faEnvelopeCircleCheck , faPlus} from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import React, {useState } from 'react';
import {backendLink} from '../links.js'

let url = `${backendLink}/sendEmail.php`;


function Contacts() {
    const [senderName, setSenderName] = useState('');
    const [senderSurname, setSenderSurname] = useState('');
    const [userMsg, setuserMsg] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [errSuccessMsg, setErrSuccessMsg] = useState([]);
    
    function toggleEmailLoader() {
        let loader = document.getElementById('loaderWrapper');
        loader.style.display = "none";
    }

    function clearAllMsgShowSuccces(){
        setSenderName('');
        setSenderSurname('');
        setuserMsg('');
        setUserEmail('');
        setErrSuccessMsg([])
        let succesMsgWrapper = document.getElementById('SuccesWrapper');
        succesMsgWrapper.style.display = "flex";
    }

    function sendEmail(e) {
        e.preventDefault();
        let formData = new FormData();
        formData.append('name', senderName);
        formData.append('surname', senderSurname);
        formData.append('msg', userMsg);
        formData.append('email', userEmail);

        const requestOptions = {
            method: 'POST',
            mode: "cors",
            enctype: 'multipart/form-data',
            body: formData
        }

        let loader = document.getElementById('loaderWrapper');
        
        loader.style.display = "flex";
        fetch(url , requestOptions)
        .then((response) => response.json())
        .then(data => {
            if(data === 200) {
                setTimeout(toggleEmailLoader, 500);
                setTimeout(clearAllMsgShowSuccces, 500);
                
        
            } else {
                setErrSuccessMsg(data);
            }
            setTimeout(toggleEmailLoader, 500);
            
      
        }).catch(err => {
            setTimeout(toggleEmailLoader, 500);
            setErrSuccessMsg('err')
        })
    }

    function sendOnotherMsg(){
        let succesMsgWrapper = document.getElementById('SuccesWrapper');
        succesMsgWrapper.style.display = "none";
    }
    return (
        <div className="Contacts">
            <div className='ContactsDetails'>
                {/* Address */}
                <h3 className='ContactFormHeader'>
                    <FontAwesomeIcon className='contactsFontAwesome' icon={faMapLocationDot} />
                    Address
                </h3>
                <div className='AddressWrapper'>
                
                    <div className='AddressAndMapWrapper'>
                        <div style={{padding: '2%'}}>
                            St Martin's Church Hall, Church Street,<br /> Epsom, Surrey<br />
                            KT17 4PX<br />
                            Visits by appointment only.
                        </div>    
                        <iframe title="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2492.908157660294!2d-0.2609229842365049!3d51.33120907960647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875e2138025ee11%3A0x7e34c1ed3cbb47cd!2sSt%20Martin&#39;s%20Parish%20Church%2C%20Epsom!5e0!3m2!1slv!2suk!4v1653574128986!5m2!1slv!2suk" style={{width: '100%', flex: '1 0 45%'}} height={280}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                {/* Contacts */}
                <h3 className='ContactFormHeader'>
                    <FontAwesomeIcon className='contactsFontAwesome' icon={faAddressCard} />
                    Contacts
                </h3>
               <div className='ContactsWrapper'> 
               
                    <p>
                        <FontAwesomeIcon className='contactsFontAwesome' icon={faPhone} />
                         07 535 796 472
                    </p>
                    <p>
                        <FontAwesomeIcon className='contactsFontAwesome' icon={faEnvelope} />
                        bakerjanice746@gmail.com  
                    </p>
                    <p>
                        <a className='Discord' href='https://discord.gg/62kFWR72Pv' target={'blank'}>
                            <FontAwesomeIcon className='contactsFontAwesome' icon={faDiscord} />
                            <span> JOIN US ON DISCORDE </span>
                        </a>
                    </p>
                    
                    <p>
                        <a className='Discord' href='https://chat.whatsapp.com/KUkCSGbYLFkCihuAnRhYdW' >
                            <FontAwesomeIcon className='contactsFontAwesome' icon={faWhatsapp} />
                            <span> JOIN US ON WHATSAPP </span>
                        </a>
                    </p>
                </div>
                
                         
            </div>
           
            
           <h3 className='ContactFormHeader'>Contact Form</h3>

<div className="FormContainer">
    <div id='loaderWrapper'>
        <div className="loader"></div>
        <p>Sending...</p>
    </div>

    <div id='SuccesWrapper'>
        <div className="success">
            <p>
                <FontAwesomeIcon className='successMsgAwesomeIcon'  icon={faEnvelopeCircleCheck} />
                Message Sent Successfully
            </p>
        </div>
        <button className='sendOnotherMsgBtn' onClick={()=> sendOnotherMsg()}>
            Send One More   
            <FontAwesomeIcon className='sendOnotherMsgAwasomeIcon'  icon={faPlus} />
        </button>
    </div>
 
    <div className='errMsgAligner'>
        {errSuccessMsg.map((err, index) => { 
            return (
                <p className='errMsg' key={index}>
                    <FontAwesomeIcon className='errorAwesomeIcon' icon={faTriangleExclamation} />
                    {err}
                </p>
            )
         })}
    </div>
 
 
   
  <form >
      <div className='NameSectionWrapper'>
        <div className='NameLabel'>Tell Us Your Name *</div>
        <div className='formFullNameWrapper'>
            <input type="text" value={senderName} id="fname" name="firstname" placeholder="First Name" onChange={(e)=> setSenderName(e.target.value)}/>
            <input type="text" value={senderSurname} id="lname" name="lastname" placeholder="Last Name.." onChange={(e)=> setSenderSurname(e.target.value)}/>
        </div>
      </div>

      <div className='NameSectionWrapper'>
        <div className='NameLabel'>Enter Your Email *</div>
        <div className='formFullNameWrapper'>
            <input type="text" value={userEmail}  name="email" placeholder="Email" onChange={(e)=> setUserEmail(e.target.value)}/>
        </div>
      </div>

      <div className='NameSectionWrapper'>
        <div className='NameLabel'>Message*</div>
        <div className='formFullNameWrapper'>
            <textarea value={userMsg} placeholder="Write something.." onChange={(e)=> setuserMsg(e.target.value)}></textarea>
        </div>
      </div>
   

    <input className='ContactFormSubmitBtn' type="submit" value="Submit" onClick={(e)=> sendEmail(e)}/>
  </form>
</div>
       </div>
    )
}

export default Contacts;